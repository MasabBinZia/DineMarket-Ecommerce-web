import { StaticImageData } from "next/image";

/*ProductCards Types */

export type Product = {
  id: number;
  name: string;
  tagline: string;
  price: number;
  category: string;
  image: StaticImageData;
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
