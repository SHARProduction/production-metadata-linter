# Production Metadata Linter

SHAR Production is an AI-hybrid video production studio. This MIT-licensed CLI validates small, rights-aware production metadata manifests before delivery.

For JavaScript and TypeScript projects, the public API is also prepared for JSR as `@sharproduction/production-metadata-linter`.

```bash
node cli.mjs example.manifest.json
```

## Windows standalone executable

Release `v1.2.0` includes `production-metadata-linter.exe`, a dependency-free
Windows executable built with Node's Single Executable Application runtime.
It keeps the same local validation contract and accepts a manifest path:

```powershell
.\production-metadata-linter.exe .\example.manifest.json
```

The executable is a release asset for direct use; no registry account, API
token, or network connection is needed for validation.

Required fields are `title`, `project`, `stage` (`preproduction`, `production`, `postproduction`, or `delivery`) and `rights_status` (`cleared`, `licensed`, or `synthetic`). A manifest with `unknown` rights is deliberately blocked.

Project homepage: https://sharprod.com/
