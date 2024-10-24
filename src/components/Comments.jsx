import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comments.length > 0 && (
        <div className="bg-black/40 shadow-lg p-4 pb-1">
          <h3 className="text-sm mb-2 font-mono border-b border-gray-600 pb-1 text-white">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b last:border-0 border-gray-500 mb-2 flex flex-col pb-2 gap-2">
              <p className="text-white text-xs font-mono">
                <span>{comment.name}</span> em {" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className=" text-gray-200 w-full text-sm">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
