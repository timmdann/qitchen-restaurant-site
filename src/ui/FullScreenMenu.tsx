import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import CrossToLineButton from "./CrossToLineButton";
import TextDecoration from "./TextDecoration";

type Props = {
  open: boolean;
  onClose: () => void;
  items?: { to: string; label: string }[];
};

const defaultItems = [
  { to: "/menu", label: "MENU" },
  { to: "/reservation", label: "RESERVATION" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
  { to: "/blog", label: "BLOG" },
];

export default function FullScreenMenu({
  open,
  onClose,
  items = defaultItems,
}: Props) {
  const { pathname } = useLocation();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstLinkRef.current?.focus(), 0);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const ui = (
    <div
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-[99999] transition-opacity duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-neutral-950" onClick={onClose} />

      <div className="absolute inset-0 p-6">
        <div className="relative h-full w-full rounded-2xl bg-neutral-900 border border-white/10">
          <CrossToLineButton
            onClick={onClose}
            className="absolute top-3 left-3 text-white/80 hover:text-white"
          />
          <div className="h-full w-full flex items-center justify-center px-6">
            <nav
              className={[
                "text-center select-none",
                "transition-transform duration-300",
                open ? "scale-100" : "scale-95",
              ].join(" ")}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-center text-white/40">
                <TextDecoration variant="single" />
              </div>

              <ul className="mt-8 space-y-4">
                {items.map((it, i) => {
                  const active = pathname === it.to;
                  return (
                    <li key={it.to}>
                      <Link
                        ref={i === 0 ? firstLinkRef : undefined}
                        to={it.to}
                        onClick={onClose}
                        className={[
                          "inline-block font-forum tracking-wide",
                          "text-4xl md:text-6xl",
                          active
                            ? "text-orange-100"
                            : "text-orange-100/90 hover:text-amber-200",
                          "transition-colors outline-none",
                          "focus-visible:ring-2 focus-visible:ring-amber-200/40 rounded px-3 py-1",
                        ].join(" ")}
                      >
                        {it.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex items-center justify-center text-white/40">
                <TextDecoration variant="single" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(ui, document.body);
}
