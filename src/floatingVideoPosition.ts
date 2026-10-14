export type VideoPosition = { x: number; y: number };
export function clampVideoPosition(position: VideoPosition, viewport: { width: number; height: number }, panel: { width: number; height: number }): VideoPosition {
  const margin = 12;
  return {
    x: Math.max(margin, Math.min(position.x, Math.max(margin, viewport.width - panel.width - margin))),
    y: Math.max(margin, Math.min(position.y, Math.max(margin, viewport.height - panel.height - margin))),
  };
}
