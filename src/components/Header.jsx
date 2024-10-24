import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Logo from "./Logo";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-3">
      <div className="w-full py-4 flex flex-row justify-between items-center">
        <div className="mb:float-left block">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <div className="hidden md:float-right md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="border-x border-separate px-3 text-sm md:float-right mt-2 align-middle text-white cursor-pointer hover:underline hover:ease-in-out hover:duration-300 underline-offset-4">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
