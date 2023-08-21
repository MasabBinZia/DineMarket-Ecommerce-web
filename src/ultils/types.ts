import { StaticImageData } from "next/image";

/*ProductCards Types */

export type Product = {
  id: number;
  name: string;
  tagline: string;
  price: number;
  category: string;
  image: StaticImageData;
  discount?: number;
  qty: number;
  slug: string;
};

export type Cart = {
  id: number;
  name: string;
  tagline: string;
  price: number;
  category: string;
  image: StaticImageData;
  discount?: number | undefined;
  qty: number;
  slug: string;
};
/*NavBar Types */

export type NavLink = {
  id: number;
  name: string;
  href: string;
};

/*Footer Types */

export type companyLinks = {
  id: number;
  name: string;
};
export type supportLinks = {
  id: number;
  name: string;
};
export type contactLinks = {
  id: number;
  name: string;
};
