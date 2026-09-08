$ErrorActionPreference = 'Stop'
$toolsDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$packageArgs = @{
  packageName    = 'shar-production-metadata-linter.portable'
  fileFullPath   = Join-Path $toolsDir 'production-metadata-linter.exe'
  url64bit       = 'https://github.com/SHARProduction/production-metadata-linter/releases/download/v1.2.0/production-metadata-linter.exe'
  checksum64     = 'F9F91567ECDB2FB538FF37BF1A22A309EA8859460A09613FB2A6742B15B598B9'
  checksumType64 = 'sha256'
}
Get-ChocolateyWebFile @packageArgs
Install-BinFile -Name 'production-metadata-linter' -Path $packageArgs.fileFullPath