import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogOne from "@/components/blog-one";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
import { fetchPosts, fetchPostsCats } from '../lib/fetchData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const BlogPage = ({ cats, posts }) => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="IKONIKS Blog Page">
          <HeaderOne />
          <PageBanner title="Blog" name="Blog" />
          {posts && cats && <BlogOne posts={posts.payload} cats={cats.payload} />}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogPage;

export async function getStaticProps({ locale }) {

  let posts = await fetchPosts()
  let cats = await fetchPostsCats()
  return {
    props: { ...await serverSideTranslations(locale, ['common']), cats, posts }, revalidate: 300,
  }
}
