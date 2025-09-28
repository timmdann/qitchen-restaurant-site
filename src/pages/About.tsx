import ImagePagination from "../features/about/ImagePagination";
import TextDecoration from "../ui/TextDecoration";

export default function About() {
  const imagesBottom = [
    { src: "/about-images/about-bottom-left-1.jpg", alt: "Chef plating dish" },
    {
      src: "/about-images/about-bottom-left-2.jpg",
      alt: "Restaurant interior",
    },
    {
      src: "/about-images/about-bottom-left-3.jpg",
      alt: "Fresh sushi close-up",
    },
  ];
  const imagesTop = [
    { src: "/about-images/about-top-right-1.jpg", alt: "Chef plating dish" },
    {
      src: "/about-images/about-top-right-2.jpg",
      alt: "Restaurant interior",
    },
    {
      src: "/about-images/about-top-right-3.jpg",
      alt: "Fresh sushi close-up",
    },
  ];

  return (
    <div className="h-full min-h-0 text-orange-100">
      <div className="grid h-full min-h-0 grid-rows gap-4">
        <div className="grid h-full min-h-0 grid-cols-1 md:grid-cols-12 gap-4">
          <section className="col-span-7 h-full min-h-0 rounded-2xl border border-white/10 bg-black/20 p-6 flex flex-col justify-between">
            <h2 className="font-forum text-2xl leading-tight">
              <TextDecoration variant="text">
                SUSHI ARTISTRY REDEFINED
              </TextDecoration>
            </h2>
            <p className="mt-6 text-base font-jost leading-relaxed text-orange-100/90">
              Where culinary craftsmanship meets modern elegance. Indulge in the
              finest sushi, expertly curated to elevate your dining experience.
            </p>
          </section>

          <figure className="col-span-5 h-full min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="h-full">
              <ImagePagination
                images={imagesTop}
                rounded="rounded-2xl"
                fit="cover"
                autoPlay={false}
                intervalMs={4500}
                className="border border-white/10 bg-black/20"
              />
            </div>
          </figure>
        </div>

        <div className="grid grid-cols-12 gap-4 min-h-0">
          {[
            { t: "TRIP ADVISOR", p: "BEST SUSHI" },
            { t: "MICHELIN GUIDE", p: "QUALITY FOOD" },
            { t: "STAR DINING", p: "COOL VIBE" },
          ].map(({ t, p }) => (
            <section
              key={t}
              className="col-span-4 h-full min-h-0 rounded-2xl border border-white/10 bg-black/20 p-6 "
            >
              <div className="text-amber-200 text-center">★★★★★</div>
              <h3 className="mt-3 font-forum text-lg text-center">{t}</h3>
              <p className="mt-3 text-[13px] text-white/60 text-center">{p}</p>
            </section>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-0">
          <figure className="col-span-7 h-full min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="h-full">
              <ImagePagination
                images={imagesBottom}
                rounded="rounded-2xl"
                fit="cover"
                autoPlay={false}
                intervalMs={4500}
                className="border border-white/10 bg-black/20"
              />
            </div>
          </figure>

          <section className="col-span-5 h-full min-h-0 rounded-2xl border border-white/10 bg-black/20 p-6 flex flex-col justify-between">
            <h2 className="text-center font-forum text-2xl">
              <TextDecoration variant="text"> OUR STORY </TextDecoration>
            </h2>
            <p className="mt-6 text-base font-jost leading-relaxed text-orange-100/90">
              Founded with a passion for culinary excellence, Qitchen’s journey
              began in the heart of Prague. Over years, it evolved into a haven
              for sushi enthusiasts, celebrated for its artful mastery and
              devotion to redefining gastronomy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
