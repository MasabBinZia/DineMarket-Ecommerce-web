import Image from "next/image";
import Link from "next/link";
import logo from "/public/headerLogo.webp";

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
              <li>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  How it Works
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Support
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Support Carrer
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">24h Service</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Contact
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Support 24h</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
