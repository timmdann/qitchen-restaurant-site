import { menu } from "../data/menu";
import Button from "../ui/Button";
import TextDecoration from "../ui/TextDecoration";

function Menu() {
  return (
    <div className="space-y-24 px-2 md:px-20 pt-8 pb-20 text-orange-100 rounded-2xl border border-white/10 bg-black/20">
      <div className="flex flex-wrap items-center justify-center gap-2 py-2">
        {menu.map((s) => (
          <Button
            key={s.id}
            kind="anchor"
            target="_top"
            href={`#${s.id}`}
            variant="outline"
            size="sm"
            rounded="md"
          >
            {s.title}
          </Button>
        ))}
      </div>

      {menu.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="px-4 sm:px-6 md:px-8 scroll-mt-24"
        >
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-12 font-forum text-center">
            <TextDecoration variant="text">{section.title}</TextDecoration>
          </h2>

          <ul>
            {section.items.map((item) => (
              <li
                key={item.id}
                className="
                  grid items-start
                  grid-cols-1 gap-4 py-6
                  md:grid-cols-[150px_1fr_auto] md:gap-6 md:py-6
                "
              >
                <div
                  className="
                    w-full h-40 sm:h-44 rounded-2xl overflow-hidden
                    md:w-[150px] md:h-[100px] md:flex-shrink-0
                  "
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-baseline gap-3 md:gap-2">
                    <h3 className="font-forum text-lg sm:text-xl tracking-wide">
                      {item.title}
                    </h3>
                    <span className="flex-1 translate-y-2 border-b border-dotted border-white/30" />

                    <span className="md:hidden pl-3 font-forum whitespace-nowrap">
                      ${item.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-orange-100/70 leading-relaxed font-jost">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden md:block pt-1 whitespace-nowrap font-forum">
                  ${item.price}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Menu;
