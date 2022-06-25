import React, { Fragment } from "react";
import Link from "next/link";

import { useRouter } from 'next/router'
const BlogSidebar = ({ posts, cats }) => {
  const router = useRouter()
  return (
    <Fragment>
      {/* <aside className="widget search-widget">
        <form method="post" action="#" className="searchform">
          <input type="search" placeholder="Search here..." name="s" id="s" />
        </form>
      </aside> */}
      <aside className="widget recent_posts ">
        <h3 className="widget_title">Latest Posts</h3>
        <div className="meipaly_post_widget">
          {posts.map((post, index) => (
            <div className="mpw_item" key={post.id}>
              <img src={`http://backend.test.ikoniks.de/${post.attachment}`} alt="" />
              <Link href={`/blog-single?category=${post.category_id}&item=${post.id}`}>
                <a>{post.title ? post.title[router.locale] : "Blog Item"}</a>
              </Link>

            </div>
          ))}
        </div>
      </aside>
      <aside className="widget categories">
        <h3 className="widget_title">Categories</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <Link href={`/blog`}>
                <a >ALL</a>
              </Link>
            </li>
            {cats.map((cat) => {
              return (
                <li>
                  <Link href={`/blog?category=${cat.id}`}>
                    <a >{cat.name ? cat.name[router.locale] : "Blog Item"}</a>
                  </Link>
                </li>

              )
            })}


          </ul>
        </div>
      </aside>
      {/* <aside className="widget">
        <h3 className="widget_title">Tags:</h3>
        <div className="meipaly_tagcloude_widget">
          <a href="#">Business,</a> <a href="#">Agency,</a>{" "}
          <a href="#">Digital,</a> <a href="#">Technology,</a>
          <a href="#">Parallax,</a> <a href="#">Innovative,</a>{" "}
          <a href="#">Professional,</a>
          <a href="#">Experience,</a>
        </div>
      </aside> */}
    </Fragment>
  );
};

export default BlogSidebar;
