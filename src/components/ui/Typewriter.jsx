import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

/**
 * Types each string out, pauses, deletes it, and moves to the next.
 * Renders a blinking caret after the text.
 */
export default function Typewriter({ texts, className = "" }) {
  const [textIndex, setTextIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = texts[textIndex];
    let delay = deleting ? DELETE_MS : TYPE_MS;

    if (!deleting && length === full.length) delay = HOLD_MS;
    if (deleting && length === 0) delay = 300;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (length < full.length) setLength(length + 1);
        else setDeleting(true);
      } else if (length > 0) {
        setLength(length - 1);
      } else {
        setDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [texts, textIndex, length, deleting]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {texts[textIndex].slice(0, length)}
      <span aria-hidden="true" className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle" style={{ height: "1em" }} />
    </span>
  );
}
