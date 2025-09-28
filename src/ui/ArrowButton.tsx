type Props = {
  className?: string;
  size?: number;
  stroke?: string;
};

export default function ArrowButton({
  className = "",
  size = 25,
  stroke = "orange-100",
}: Props) {
  return (
    <div
      className={[
        "relative flex items-center justify-center rounded-full border overflow-hidden select-none",
        className,
      ].join(" ")}
      style={{
        width: size,
        height: size,
        borderColor: stroke,
      }}
    >
      <img
        src="/icons/arrow-right.svg"
        alt="arrow"
        className="tw-arrow-inner w-2/3 h-2/3"
      />

      <style>{`
        @keyframes arrow-fly {
          0%   { transform: translate(0,0); }
          40%  { transform: translateX(40px); }
          41%  { transform: translateX(-40px); }
          100% { transform: translateX(0); }
        }

        .${sanitize(className)}:hover .tw-arrow-inner,

        .group:hover .tw-arrow-inner {
          animation: arrow-fly 1s ease-in-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .${sanitize(className)}:hover .tw-arrow-inner,
          .group:hover .tw-arrow-inner {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

function sanitize(cls: string) {
  return (cls || "arrow-btn").split(" ").filter(Boolean)[0];
}
