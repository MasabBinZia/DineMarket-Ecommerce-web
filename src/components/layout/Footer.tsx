import Image from "next/image";
import Link from "next/link";
import logo from "/public/headerLogo.webp";
import { CompanyLinks } from "@/ultils/footerLinks";
import { SupportLinks } from "@/ultils/footerLinks";
import { ContactLinks } from "@/ultils/footerLinks";

const Footer = () => {
  return (
    <footer className="text-gray-500 body-font py-20 ">
      <div className="container px-5 py-24 mx-auto flex md:items-start text-start  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium items-start md:justify-start justify-start text-gray-900"
          >
            <Image width={150} height={150} src={logo} alt="Logo" />
          </Link>
          <p className="mt-2">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Company
            </h2>
            <nav className="list-none mb-10 space-y-4">
              {CompanyLinks.map((company) => (
                <li key={company.id}>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    {company.name}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Support
            </h2>
            <nav className="list-none mb-10 space-y-4">
              {SupportLinks.map((support) => (
                <li key={support.id}>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    {support.name}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Contact
            </h2>
            <nav className="list-none mb-10 space-y-4">
              {ContactLinks.map((contact) => (
                <li key={contact.id}>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    {contact.name}
                  </a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
