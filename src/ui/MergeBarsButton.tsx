import Button from "./Button";

type Props = { onClick?: () => void; className?: string };

export default function MergeBarsButton({ onClick, className = "" }: Props) {
  return (
    <Button
      variant="solid"
      size="md"
      rounded="md"
      onClick={onClick}
      className={[
        "group relative w-8 h-8 outline-none select-none",
        className,
      ].join(" ")}
      aria-label="Open menu"
    >
      <span
        className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[6px]
        w-4 h-[1px] rounded bg-orange-100 transition-transform duration-300
        group-hover:translate-y-0
      "
      />

      <span
        className="
        absolute left-1/2 top-1/2 -translate-x-1/2
        w-4 h-[1px] rounded bg-orange-100 transition-opacity duration-300
        group-hover:opacity-0
      "
      />

      <span
        className="
        absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[6px]
        w-4 h-[1px] rounded bg-orange-100 transition-transform duration-300
        group-hover:translate-y-0
      "
      />
    </Button>
  );
}
