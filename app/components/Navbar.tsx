import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 md:px-24 py-12 text-[18px] font-medium">
      <div>
        <Link href="/">Michael Usidamen</Link>
      </div>
      <div className="flex space-x-1 hover:text-[#ACA0E8] transition cursor-pointer">
        <Image src="/download.svg" alt="download" width={24} height={24} />
        <span>
          <a
            target="_blank"
            download
            href="https://drive.google.com/file/d/1jnoh5IrbtOh22xueauJ_X6VzeqYt8en9/view"
          >
            Resume
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
