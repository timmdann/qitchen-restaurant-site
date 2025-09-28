import { Link } from "react-router-dom";
import ArrowButton from "../../ui/ArrowButton";

function NavCard({
  img,
  title,
  to,
  size,
}: {
  img: string;
  title: string;
  to: string;
  size: string;
}) {
  return (
    <Link
      to={to}
      className="
        group relative block overflow-hidden rounded-2xl
        h-48 md:h-44
        xl:h-full
      "
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between">
        <div>
          <img
            src="/icons/helper-svg.svg"
            alt="helper"
            className="w-6 h-6 absolute bottom-6 -right-4"
          />
          <img
            src="/icons/helper-svg.svg"
            alt="helper"
            className="w-6 h-6 absolute -bottom-4"
            style={{ right: `${size}px` }}
          />
          <div className="absolute -bottom-4 -right-4 z-10 inline-flex py-2 px-6 flex-row items-start gap-8 bg-neutral-950 rounded-tl-3xl">
            <span className="text-orange-100">{title}</span>
            <ArrowButton />
          </div>
        </div>
      </div>
    </Link>
  );
}
export default NavCard;
