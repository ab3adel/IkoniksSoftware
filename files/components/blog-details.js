import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar";
import SinglePostCard from "@/components/single-post-card";

const BlogDetails = ({ post, posts, cats }) => {
  return (
    <section className="commonSection blogDetails pb-4">
      <Container>
        <Row>
          <Col lg={8}>
            <SinglePostCard post={post} />
          </Col>
          <Col lg={4} className="sidebar">
            <BlogSidebar cats={cats} posts={posts} />
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default BlogDetails;
