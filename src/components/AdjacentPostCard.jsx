import React from "react";
import moment from "moment";
import Link from "next/link";

const AdjacentPostCard = ({ post }) => (
  <>
    <div
      className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-60"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    >
      <div className="absolute bg-center bg-gradient-to-b opacity-60 from-gray-400 via-gray-700 to-black w-full h-full" />
      <div className="flex flex-col p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white text-shadow font-medium text-sm">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="text-white text-shadow font-medium text-sm text-center">
          {post.title}
        </p>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="z-10 cursor-pointer absolute w-full h-full" />
      </Link>
    </div>
  </>
);

export default AdjacentPostCard;
