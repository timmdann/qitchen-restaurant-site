import type { MenuSection } from "../types/menu";

export const maki: MenuSection = {
  id: "maki",
  title: "MAKI",
  items: [
    {
      id: "spicy-tuna-maki",
      title: "SPICY TUNA MAKI",
      desc: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      price: 5,
      img: "/menu-images/maki/spicy-tuna-maki.jpg",
      tags: ["spicy"],
    },
    {
      id: "mango-maki",
      title: "MANGO MAKI",
      desc: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      price: 5,
      img: "/menu-images/maki/mango-maki.jpg",
      tags: ["vegan"],
    },
    {
      id: "salmon-maki",
      title: "SALMON MAKI",
      desc: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      price: 5,
      img: "/menu-images/maki/salmon-maki.jpg",
    },
    {
      id: "tuna-maki",
      title: "TUNA MAKI",
      desc: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      price: 5,
      img: "/menu-images/maki/tuna-maki.jpg",
    },
  ],
};
