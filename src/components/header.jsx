import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" flex w-full gap-8 justify-end px-[60px] text-xl font-medium items-center pt-6">
      <Link href={"/"}>
        <p>Home</p>
      </Link>
      <Link href={"/works"}>
        <p>Works</p>
      </Link>
      <Link href={"/blog"}>
        <p>Blog</p>
      </Link>
      <Link href={"/contact"}>
        <p>Contact</p>
      </Link>
      <Link href={"/translate"}>
        <p>Translate</p>
      </Link>
    </div>
  );
};

export default Header;
