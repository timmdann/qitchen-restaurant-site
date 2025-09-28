function Map({
  center = [50.0755, 14.4378], // Prague center
  zoom = 11,
}: {
  center?: [number, number];
  zoom?: number;
}) {
  const [lat, lng] = center;
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <iframe
        title="Prague map"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[600px] w-full grayscale-[20%] contrast-90 brightness-90"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

export default Map;
