import Image from "next/image";
import React from "react";
import { grpahCMSImageLoader } from "../utils/util";

const Author = ({ author }) => {
  return (
    <div className="text-center pt-10 pb-4 mt-8 mb-4 relative bg-black bg-opacity-20">
      <div className="absolute flex justify-center w-full -left-0 -top-4">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full w-12 h-12"
          src={author.photo.url}
        />
      </div>
      <p className="text-white text-sm font-mono">{author.name}</p>
      <p className="text-white text-xs">{author.bio}</p>
    </div>
  );
};

export default Author;
