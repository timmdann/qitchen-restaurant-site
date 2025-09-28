export type MenuTag = "spicy" | "vegan" | "new" | "chef";

export interface MenuItem {
  id: string;
  title: string;
  desc: string;
  price: number;
  img: string;
  tags?: MenuTag[];
  unavailable?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}
