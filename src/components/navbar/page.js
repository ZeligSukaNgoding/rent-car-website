import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/logo.png";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-[#640000] text-white border-b-2">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={80} />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/tujuan">Our Purpose</Link>
              </li>
              <li>
                <Link href="/contact">About Us</Link>
              </li>
              <li>
                <Link href="/event">Event</Link>
              </li>
              <li>
                <Link href="/product">Our Product</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side absolute top-0 left-0 right-0 bottom-0 z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-80 min-h-full bg-[#640000] text-white z-10 font-bold gap-y-2">
          <div className="p-8 border-b-4">
            <Link href="/">
              <Image src={Logo} alt="Logo Vespa Balap Indonesia" />
            </Link>
          </div>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/contact">About Us</Link>
          </li>
          <li>
            <Link href="/tujuan">Our Purpose</Link>
          </li>
          <li>
            <Link href="/event">Event</Link>
          </li>
          <li>
            <Link href="/product">Our Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
