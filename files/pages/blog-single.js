import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog-details";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import RelatedBlog from "@/components/relatedBlog";
import HeaderOne from "@/components/header-one";
import { fetchPosts, fetchPostsCats } from '../lib/fetchData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const BlogSinglePage = ({ cats, posts }) => {
  const router = useRouter()
  const { item, category } = router.query
  const { t } = useTranslation('common')

  let post = item ? posts.payload.find(ele => ele.id == item) : ''
  let related = item && category ? posts.payload.filter(ele => ele.category_id == category && ele.id != item) : ''
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={post.title ? post.title[router.locale] : "Blog Details Page"}>
          <HeaderOne />
          <PageBanner title={t("Blog Details")} name="Blog" />
          {post && posts && cats && <BlogDetails post={post} posts={posts.payload} cats={cats.payload} />}
          {related && <RelatedBlog posts={related} />}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogSinglePage;
export async function getStaticProps({ locale }) {

  let posts = await fetchPosts()
  let cats = await fetchPostsCats()
  return {
    props: { ...await serverSideTranslations(locale, ['common']), cats, posts }, revalidate: 300,
  }
}

