import { useEffect, useState } from "react";

/**
 * Returns the live GitHub avatar for `handle` once it has fully downloaded,
 * and the bundled `fallback` until then (or forever, if GitHub is unreachable).
 *
 * The fallback is painted immediately so the hero never waits on the network,
 * then the live image is fetched off-screen and swapped in when ready.
 * `isLive` lets the caller crossfade instead of hard-cutting between the two.
 */
export function useGithubAvatar(handle, fallback, size = 460) {
  const [src, setSrc] = useState(fallback);

  useEffect(() => {
    if (!handle) return undefined;

    const liveUrl = `https://avatars.githubusercontent.com/${handle}?size=${size}`;
    const img = new Image();
    let cancelled = false;

    img.onload = () => {
      if (!cancelled) setSrc(liveUrl);
    };
    img.onerror = () => {
      /* leave the bundled fallback in place */
    };
    img.src = liveUrl;

    return () => {
      cancelled = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [handle, fallback, size]);

  return { src, isLive: src !== fallback };
}
