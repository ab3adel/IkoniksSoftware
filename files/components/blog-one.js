import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paginations from "@/components/paginations";
import { BlogData } from "@/data";
import BlogCard from "@/components/blog-card";
import { useRouter } from 'next/router'
import Link from "next/link";


const BlogOne = ({ cats, posts }) => {
  const router = useRouter()
  const { category } = router.query
  const filterPosts = category ? posts.filter(item => item.category_id == category) : posts
  return (
    <section className="commonSection blogPage blogSection">
      <Container>
        <Row>
          <Col lg={12} sm={12} md={12}  >
            <ul className="ulCats">
              <li className={`${!category ? 'active' : ''}`}>
                <Link href={`/blog`}>
                  <a >ALL</a>
                </Link>
              </li>
              {cats.map((cat) => {
                return (
                  <li key={cat.id} className={`${category && category == cat.id ? 'active' : ''}`} >
                    <Link href={`/blog?category=${cat.id}`}>
                      <a >{cat.name ? cat.name[router.locale] : "Blog Item"}</a>
                    </Link>
                  </li>

                )
              })}


            </ul>
          </Col>
          {filterPosts && filterPosts.map((post, index) => (
            <Col lg={4} sm={12} md={6} key={post.id}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
        {/* <Paginations /> */}
      </Container>
    </section >
  );
};

export default BlogOne;
