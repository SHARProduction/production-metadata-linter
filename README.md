# Production Metadata Linter

SHAR Production is an AI-hybrid video production studio. This MIT-licensed CLI validates small, rights-aware production metadata manifests before delivery.

```bash
node cli.mjs example.manifest.json
```

Required fields are `title`, `project`, `stage` (`preproduction`, `production`, `postproduction`, or `delivery`) and `rights_status` (`cleared`, `licensed`, or `synthetic`). A manifest with `unknown` rights is deliberately blocked.

Project homepage: https://sharprod.com/
