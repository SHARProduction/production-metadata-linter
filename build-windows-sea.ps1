$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

node --experimental-sea-config sea-config.json
$node = (Get-Command node).Source
Copy-Item $node production-metadata-linter.exe -Force
npx --yes postject production-metadata-linter.exe NODE_SEA_BLOB production-metadata-linter.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 --overwrite
Remove-Item production-metadata-linter.blob
