$toolsDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Uninstall-BinFile -Name 'production-metadata-linter' -Path (Join-Path $toolsDir 'production-metadata-linter.exe')