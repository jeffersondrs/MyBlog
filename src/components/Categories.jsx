import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-black/40 text-white shadow-lg p-4 mb-2">
      <h3 className="text-base mb-2 border-b pb-1">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`hover:text-green-500 cursor-pointer block pb-1 mb-3 text-xs`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
