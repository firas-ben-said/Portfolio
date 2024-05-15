import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href="/"
          className=" text-2xl md:text-5xl text-white font-semibold flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2 text-sm text-white font-semibold">
            Firas BEN SAID
          </span>
        </Link>
        <p className="text-slate-500">all rights reserved © 2023 by <Link href="/">Firas BEN SAID</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
