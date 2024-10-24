import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72 md:mr-5 ">
    <div
      className="absolute bg-center bg-no-repeat bg-cover inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="text-white font-medium text-sm text-center px-4">
        {post.title}
      </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized="true"
          alt={post.author.name}
          height="30"
          width="30"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-xs ml-2 font-mono">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
