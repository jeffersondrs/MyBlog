import Image from "next/image";
import React from "react";
import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute flex justify-center w-full -left-0 -top-12">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={author.name}
          height="100"
          width="100"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  );
};

export default Author;
