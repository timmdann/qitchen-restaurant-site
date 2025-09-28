import TextDecoration from "../ui/TextDecoration";
import ArticlesList from "../features/blog/ArticlesList";
import { articles } from "../features/blog/articles.data";

function Blog() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8 flex flex-col gap-20">
      <div className="px-2 md:px-20">
        <h2 className="font-forum text-2xl text-amber-100 mb-6 pt-20">
          <TextDecoration variant="text">LATEST NEWS</TextDecoration>
        </h2>
        <ArticlesList articles={articles} />
      </div>
    </section>
  );
}

export default Blog;
