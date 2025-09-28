export function Field({
  label,
  text,
}: {
  label: string;
  text: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
      <span className="tracking-[0.2em] text-xs text-orange-100/50 font-jost">
        {label}
      </span>
      <p className="text-right text-lg text-orange-100/90 font-jost">{text}</p>
    </div>
  );
}
