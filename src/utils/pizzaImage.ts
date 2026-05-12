function hashStringToInt(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  return hash;
}

function pickColorPair(seed: number): readonly [string, string] {
  const palettes: ReadonlyArray<readonly [string, string]> = [
    ["#ffedd5", "#f97316"], // orange
    ["#dcfce7", "#22c55e"], // green
    ["#dbeafe", "#3b82f6"], // blue
    ["#fae8ff", "#a855f7"], // purple
    ["#ffe4e6", "#f43f5e"], // rose
    ["#fef9c3", "#eab308"], // yellow
    ["#e2e8f0", "#0f172a"], // slate
  ];
  return palettes[seed % palettes.length];
}

export function getPizzaFallbackDataUrl(name: string = "Pizza"): string {
  const safeName = String(name || "Pizza").trim() || "Pizza";
  const seed = hashStringToInt(safeName.toLowerCase());
  const [bg, fg] = pickColorPair(seed);
  const initials = safeName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" role="img" aria-label="${safeName}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="36" fill="url(#g)"/>
  <circle cx="192" cy="64" r="44" fill="${fg}" opacity="0.12"/>
  <circle cx="56" cy="204" r="52" fill="${fg}" opacity="0.10"/>
  <text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle"
        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        font-size="86" font-weight="800" fill="${fg}">${initials || "P"}</text>
  <text x="50%" y="73%" text-anchor="middle" dominant-baseline="middle"
        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        font-size="18" font-weight="700" fill="#0f172a" opacity="0.55">Image unavailable</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
