function ImageLinks({ img, alt }: { img: string; alt: string }) {
  return (
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full w-full overflow-hidden"
    >
      <figure className="relative h-48 md:h-56 lg:h-full rounded-2xl overflow-hidden border border-white/10">
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </figure>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
        <img
          src="/icons/instagram-logo.svg"
          alt="Instagram"
          className="h-8 w-8"
        />
      </div>
    </a>
  );
}

export default ImageLinks;
