$taskRuntime = Join-Path $env:LOCALAPPDATA 'red-book-services\openlist'
$taskRepo = Split-Path $PSScriptRoot -Parent
$taskNode = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $taskNode) { $taskNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' }
if (-not (Test-Path -LiteralPath (Join-Path $taskRuntime 'site-video-config.json'))) { throw 'Local Quark setup is missing.' }
if (-not (Get-NetTCPConnection -LocalPort 5244 -State Listen -ErrorAction SilentlyContinue)) {
  Start-Process -FilePath (Join-Path $taskRuntime 'openlist.exe') -ArgumentList @('server','--data',('"' + (Join-Path $taskRuntime 'data') + '"')) -WorkingDirectory $taskRuntime -WindowStyle Hidden -RedirectStandardOutput (Join-Path $taskRuntime 'server-private.log') -RedirectStandardError (Join-Path $taskRuntime 'server-error.log')
}
if (-not (Get-NetTCPConnection -LocalPort 5245 -State Listen -ErrorAction SilentlyContinue)) {
  Start-Process -FilePath $taskNode -ArgumentList ('"' + (Join-Path $PSScriptRoot 'cloud-video-server.mjs') + '"') -WorkingDirectory $taskRepo -WindowStyle Hidden -RedirectStandardOutput (Join-Path $taskRuntime 'gateway.log') -RedirectStandardError (Join-Path $taskRuntime 'gateway-error.log')
}
if (-not (Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue)) {
  & $taskNode (Join-Path $PSScriptRoot 'prepare-pdf-assets.mjs')
  Start-Process -FilePath $taskNode -ArgumentList @(('"' + (Join-Path $taskRepo 'node_modules\vite\bin\vite.js') + '"'),'--host','127.0.0.1') -WorkingDirectory $taskRepo -WindowStyle Hidden -RedirectStandardOutput (Join-Path $taskRuntime 'website.log') -RedirectStandardError (Join-Path $taskRuntime 'website-error.log')
}
Write-Output 'Website: http://127.0.0.1:5173 - Video classroom / My Quark courses'
Write-Output 'Read-only WebDAV: http://127.0.0.1:5244/dav/'
