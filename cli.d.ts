/** A minimal production metadata manifest accepted by the linter. */
export interface ProductionMetadataManifest {
  title: string;
  project: string;
  stage: "preproduction" | "production" | "postproduction" | "delivery";
  rights_status: "cleared" | "licensed" | "synthetic" | "unknown";
}

/**
 * Returns human-readable validation errors for a production metadata manifest.
 * A zero-length array means that the manifest is releasable.
 */
export function lintManifest(value: unknown): string[];
