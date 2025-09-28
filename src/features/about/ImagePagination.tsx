import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: { src: string; alt?: string }[];
  className?: string;
  rounded?: string;
  fit?: "cover" | "contain";
  initialIndex?: number;
  autoPlay?: boolean;
  intervalMs?: number;
};

export default function ImagePagination({
  images,
  className = "",
  rounded = "rounded-2xl",
  fit = "cover",
  initialIndex = 0,
  autoPlay = false,
  intervalMs = 4000,
}: Props) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const clamp = (i: number) => ((i % count) + count) % count;

  const goTo = (i: number) => setIndex(clamp(i));
  const next = () => setIndex((curr) => clamp(curr + 1));
  const prev = () => setIndex((curr) => clamp(curr - 1));

  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const id = setInterval(() => {
      setIndex((curr) => clamp(curr + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, intervalMs, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (dx > threshold) prev();
    if (dx < -threshold) next();
    touchStartX.current = null;
  };

  const transformStyle = useMemo(
    () => ({ transform: `translateX(-${index * 100}%)` }),
    [index]
  );

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none ${rounded} ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={transformStyle}
      >
        {images.map(({ src, alt }, i) => (
          <figure key={i} className="shrink-0 grow-0 basis-full h-full">
            <img
              src={src}
              alt={alt ?? `Image ${i + 1}`}
              className={`w-full h-full ${
                fit === "cover" ? "object-cover" : "object-contain"
              }`}
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur text-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur text-white"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full border border-white/50 ${
              i === index ? "bg-white" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
