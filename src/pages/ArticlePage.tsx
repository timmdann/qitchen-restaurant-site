import { useParams, useOutletContext } from "react-router-dom";
import { articles } from "../features/blog/articles.data";
import { useEffect } from "react";
import TextDecoration from "../ui/TextDecoration";

type Context = { setArticleImage: (src: string | null) => void };

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { setArticleImage } = useOutletContext<Context>();

  const article = articles.find((a) => a.href?.endsWith(slug ?? ""));

  useEffect(() => {
    if (article?.image) setArticleImage(article.image);
    return () => setArticleImage(null);
  }, [article, setArticleImage]);

  if (!article) {
    return (
      <div className="p-6 text-amber-50 text-center">Article not found</div>
    );
  }

  return (
    <article className="p-6 space-y-6 rounded-2xl border border-white/10 bg-black/20 text-amber-50 px-2 md:px-52 py-20">
      <TextDecoration variant="text">{article.date}</TextDecoration>
      <h1 className="font-forum text-4xl md:text-7xl text-center">
        {article.title}
      </h1>
      <TextDecoration variant="single" />
      <h2 className="font-forum text-xl md:text-2xl">
        UNVEILING CULINARY ARTISTRY: A JOURNEY INTO QITCHEN'S SOUL
      </h2>
      <p className="font-jost text-base">
        In a world where dining experiences often blend into the ordinary,
        Qitchen stands as an emblem of culinary passion redefined. Beyond being
        a restaurant that serves sushi, Qitchen is an embodiment of dedication,
        creativity, and a profound love for the art of gastronomy. As you step
        through its doors, you're not merely entering an eatery; you're
        immersing yourself in an experience that goes beyond the boundaries of a
        traditional dining encounter.
      </p>
      <h2 className="font-forum text-2xl">CRAFTING A FEAST FOR THE SENSES</h2>
      <p className="font-jost text-base">
        The heart of Qitchen's allure lies in its meticulous attention to every
        detail, from the selection of ingredients to the presentation of each
        dish. While renowned for its exceptional sushi, Qitchen's passion for
        perfection extends to every facet of the culinary journey. The talented
        chefs curate a symphony of flavors, seamlessly blending textures,
        colors, and aromas to create a multisensory masterpiece.
      </p>
      <p className="font-jost text-base">
        The ambiance itself speaks of a story where modern elegance meets
        warmth, inviting patrons to relish not only the food but also the
        atmosphere that envelopes them. Each dish that graces the table is not
        just a meal; it's a tale told through taste—a testament to the tireless
        commitment Qitchen has toward crafting an experience that resonates with
        food enthusiasts and connoisseurs alike.
      </p>
      <h2 className="font-forum text-2xl">
        BEYOND SUSHI: NURTURING CONNECTIONS
      </h2>
      <p className="font-jost text-base">
        While the gastronomic delights are undoubtedly the centerpiece, Qitchen
        goes beyond being a culinary haven. It's a place that fosters
        connections, where conversations flow as smoothly as the sake, and
        moments turn into cherished memories. The passionate team at Qitchen
        believes that dining is an act of bonding—a chance to share joy,
        laughter, and stories over a beautifully laid table.
      </p>
      <p className="font-jost text-base">
        The Qitchen experience transcends the physical walls of the restaurant.
        It's an invitation to step out of the ordinary and into a world where
        passion for food is an art, and every guest is a cherished canvas.
        Through the symphony of flavors, the artistry of presentation, and the
        warmth of connection, Qitchen invites you to witness passion personified
        in every aspect of your dining journey.
      </p>
    </article>
  );
}
