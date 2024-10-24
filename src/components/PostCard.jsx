import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="bg-black/40 shadow-lg p-4 mb-4 gap-4 flex flex-col">
        <Image
          className="w-full h-72 object-cover"
          src={post.featuredImage.url}
          alt={post.title}
          height={320}
          width={100}
        />
      <h1 className="transition duration-700 text-center cursor-pointer text-white hover:text-green-500 text-lg font-medium">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="text-center items-center justify-center w-full flex flex-row gap-5 flex-wrap">
        <div className="flex items-center justify-center">
          <Image
            height="30"
            width="30"
            className="align-middle rounded-full"
            alt={post.author.name}
            src={post.author.photo.url}
          />

          <p className="inline align-middle text-gray-400 ml-2 text-xs">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle text-xs">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 font-normal px-4">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <button className="transition dutarion-500 transform inline-block bg-green-600 text-xs font-medium text-white py-2 px-4 cursor-pointer">
            Continue lendo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
