import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

export type Article = {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href?: string;
};

type Props = {
  articles: Article[];
  className?: string;
};

export default function ArticlesList({ articles, className = "" }: Props) {
  if (!articles?.length) {
    return (
      <div
        className={`text-amber-100 text-xl font-forum text-center${className}`}
      >
        No articles to display
      </div>
    );
  }

  return (
    <ul className={`flex flex-col gap-8 ${className}`}>
      {articles.map((a) => (
        <li
          key={a.id}
          className="
        group grid gap-5
        grid-cols-1
        md:grid-cols-[200px_1fr]
      "
        >
          <Link
            to={a.href ?? "#"}
            className="relative block overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-48 object-cover md:h-40 transform-gpu transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2 text-[11px] tracking-widest uppercase text-amber-50">
              {formatDate(a.date)}
            </div>

            <Link
              to={a.href ?? "#"}
              className="block font-forum text-xl leading-snug text-amber-100 transition-colors hover:text-amber-200 md:text-2xl"
            >
              {a.title}
            </Link>

            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-amber-50">
              {a.excerpt}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
