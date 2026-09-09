export function fallbackPoster(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return {
    background: `linear-gradient(160deg, hsl(${hue} 55% 20%) 0%, hsl(${hue} 45% 9%) 55%, hsl(${(hue + 30) % 360} 40% 8%) 100%)`,
  };
}