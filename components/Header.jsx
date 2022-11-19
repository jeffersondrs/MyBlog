import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full border-blue-400 py-8 flex flex-row justify-between items-center">
        <div className="mb:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-green-600">
              Jeffersondrs Blog's
            </span>
          </Link>
        </div>
        <div>
          <div className="hidden md:float-right md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="hover:text-green-500 border-x border-separate px-3 text-xl md:float-right mt-2 align-middle text-white  font-semibold cursor-pointer hover:underline hover:ease-in-out hover:duration-300">
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
