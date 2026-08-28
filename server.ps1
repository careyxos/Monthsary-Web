$port = 8080
$testListener = $null
while ($port -lt 8100) {
    try {
        $testListener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $port)
        $testListener.Start()
        $testListener.Stop()
        break
    } catch {
        $port++
    }
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

$url = "http://localhost:$port/"
Write-Host "==========================================" -ForegroundColor Magenta
Write-Host " Fusion - Monthsary + ChiCha Playlist" -ForegroundColor Cyan
Write-Host " URL: $url" -ForegroundColor Green
Write-Host " Press Ctrl+C in this terminal to stop." -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Magenta

# Launch the default browser
Start-Process $url

$baseDir = (Get-Item -Path ".").FullName

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".mp3"  = "audio/mpeg"
    ".wav"  = "audio/wav"
    ".ico"  = "image/x-icon"
}

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
        } catch {
            break
        }

        try {
            $request = $context.Request
            $response = $context.Response

            $rawPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath.TrimStart('/'))
            if ([string]::IsNullOrWhiteSpace($rawPath)) {
                $rawPath = "index.html"
            }

            $localPath = [System.IO.Path]::Combine($baseDir, $rawPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar))

            if ([System.IO.File]::Exists($localPath)) {
                $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
                $response.ContentType = $contentType
                $response.AddHeader("Accept-Ranges", "bytes")

                $fileInfo = New-Object System.IO.FileInfo($localPath)
                $totalLength = $fileInfo.Length

                $rangeHeader = $request.Headers["Range"]
                if ($rangeHeader -and $rangeHeader.StartsWith("bytes=")) {
                    $range = $rangeHeader.Substring(6)
                    $rangeParts = $range.Split('-')
                    $start = [int64]$rangeParts[0]
                    $end = if ($rangeParts.Length -gt 1 -and ![string]::IsNullOrEmpty($rangeParts[1])) { [int64]$rangeParts[1] } else { $totalLength - 1 }

                    if ($start -lt $totalLength -and $end -ge $start) {
                        $lengthToRead = $end - $start + 1
                        $response.StatusCode = 206
                        $response.AddHeader("Content-Range", "bytes $start-$end/$totalLength")
                        $response.ContentLength64 = $lengthToRead

                        $fs = [System.IO.File]::OpenRead($localPath)
                        try {
                            $fs.Seek($start, [System.IO.SeekOrigin]::Begin) | Out-Null
                            $buffer = New-Object byte[] (64 * 1024)
                            $remaining = $lengthToRead
                            while ($remaining -gt 0) {
                                $toRead = [System.Math]::Min($buffer.Length, $remaining)
                                $read = $fs.Read($buffer, 0, $toRead)
                                if ($read -le 0) { break }
                                if ($request.HttpMethod -ne "HEAD") {
                            $response.OutputStream.Write($buffer, 0, $read)
                        }
                                $remaining -= $read
                            }
                        } finally {
                            $fs.Close()
                        }
                    } else {
                        $response.StatusCode = 416
                    }
                } else {
                    $response.StatusCode = 200
                    $response.ContentLength64 = $totalLength
                    $fs = [System.IO.File]::OpenRead($localPath)
                    try {
                        if ($request.HttpMethod -ne "HEAD") {
                            $buffer = New-Object byte[] (64 * 1024)
                            while (($read = $fs.Read($buffer, 0, $buffer.Length)) -gt 0) {
                                $response.OutputStream.Write($buffer, 0, $read)
                            }
                        }
                    } finally {
                        $fs.Close()
                    }
                }
            } else {
                $response.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawPath")
                $response.ContentLength64 = $msg.Length
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }

            try {
                $response.OutputStream.Close()
            } catch {}
        } catch {
            # Client disconnected or error writing stream - safely ignore and continue serving next request
        }
    }
} finally {
    try { $listener.Stop() } catch {}
    try { $listener.Close() } catch {}
}
