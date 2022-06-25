import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/blog/7.jpg";

import { useRouter } from 'next/router'
const SinglePostCard = ({ post }) => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          <img src={`http://backend.test.ikoniks.de/${post.attachment}`} alt="" />
        </div>
        <div className="blog_headings">
          <span className="blog_date">{post.created_at.slice(0, 10)}</span>
          <h2>{post.title ? post.title[router.locale] : "Blog Item"}</h2>
          {/* <p className="blog_metas">
            <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-
            <a href="#">2 Comments</a>
          </p> */}
        </div>
        <div className="blog_details">
          <p>
            {post.body ? post.body[router.locale] : "Blog Item"}
          </p>

        </div>
        {/* <div className="blog_tagitems">
          <span>Tags:</span>
          <a href="#">Business</a>, <a href="#">Agency</a>,{" "}
          <a href="#">Digital</a>, <a href="#">Technology</a>
        </div> */}
        {/* <AuthorCard /> */}
        {/* <Comments /> */}
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
