import React from "react";
import Link from "next/link";

import { useRouter } from 'next/router'
const BlogCard = ({ data }) => {
  const router = useRouter()
  const { attachment, title, body, id, created_at, category_id } = data;
  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={`http://backend.test.ikoniks.de/${attachment}`} alt={title[router.locale]} />
      </div>
      <div className="lbi_details">
        <Link href={`/blog-single?category=${category_id}&item=${id}`}>
          <a className="lbid_date">{created_at.slice(0, 10)}</a>
        </Link>
        <h2>
          <Link href={`/blog-single?category=${category_id}&item=${id}`}>
            <a title={title[router.locale]}>{title[router.locale]}</a>
          </Link>
        </h2>
        <Link href={`/blog-single?category=${category_id}&item=${id}`}>
          <a className="learnM">Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
