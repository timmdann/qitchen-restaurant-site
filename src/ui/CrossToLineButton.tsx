import Button from "./Button";

type Props = {
  onClick?: () => void;
  className?: string;
};

export default function CrossToLineButton({ onClick, className = "" }: Props) {
  return (
    <Button
      onClick={onClick}
      variant="solid"
      size="md"
      rounded="md"
      className={`group relative w-9 h-9 outline-none select-none ${className}`}
      aria-label="Cross to line"
    >
      <span
        className="
            absolute left-1/2 top-1/2 w-4 h-[1px] rounded bg-white
            -translate-x-1/2 -translate-y-1/2 -rotate-45
            transition-transform duration-200 ease-linear
            group-hover:rotate-0
          "
      />
      <span
        className="
            absolute left-1/2 top-1/2 w-4 h-[1px] rounded bg-white
            -translate-x-1/2 -translate-y-1/2 rotate-45
            transition-transform duration-200 ease-linear
            group-hover:rotate-0
          "
      />
    </Button>
  );
}
