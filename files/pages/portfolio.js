import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import PortfolioOne from "@/components/portfolio-one";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
import { fetchPortfoilo, fetchPortfoiloCats } from '../lib/fetchData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
const Portfolio = dynamic(async () => await import("@/components/Portfolio"), { ssr: false },)
const PortfolioPage = ({ data, cats }) => {
  let { payload } = data
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio ">
          <HeaderOne />
          <PageBanner title="Portfolio" name="Portfolio" />
          <Portfolio withTitle={false} />
          {/* {payload && cats ? <PortfolioOne payload={payload} cats={cats.payload} /> : null} */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;


export async function getStaticProps({ locale }) {

  let data = await fetchPortfoilo()
  let cats = await fetchPortfoiloCats()

  return {
    props: { ...await serverSideTranslations(locale, ['common']), data, cats }, revalidate: 300,
  }
}