import type { ReactNode } from "react";

function TextDecoration({
  children,
  variant,
}: {
  children?: ReactNode;
  variant: string;
}) {
  type variant = "single" | "text";
  return (
    <>
      {variant === "text" && (
        <div className="flex items-center justify-center">
          <span className="inline-block w-2 h-2 rotate-45 bg-amber-100/30" />
          <span className="mr-4 h-px w-10 bg-amber-100/30 ml-0.5" />
          {children}
          <span className="ml-4 h-px w-10 bg-amber-100/30 mr-0.5" />
          <span className="inline-block w-2 h-2 rotate-45 bg-amber-100/30" />
        </div>
      )}
      {variant === "single" && (
        <div className="flex items-center justify-center">
          <span className="inline-block w-2 h-2 rotate-45 bg-amber-100/30" />
          <span className="h-px w-5 bg-amber-100/30 ml-0.5" />
          <span className="h-px w-5 bg-amber-100/30 mr-0.5" />
          <span className="inline-block w-2 h-2 rotate-45 bg-amber-100/30" />
        </div>
      )}
    </>
  );
}

export default TextDecoration;
