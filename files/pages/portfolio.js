import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import PortfolioOne from "@/components/portfolio-one";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
import {fetchPortfoilo} from '../lib/fetchData'
const PortfolioPage = ({data}) => {
let {payload}= data

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio 01 Page">
          <HeaderOne />
          <PageBanner title="Portfolio 01" name="Portfolio" />
          <PortfolioOne  payload={payload} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;


export async function getStaticProps () {
  
  let data = await fetchPortfoilo()

  return {
    props :{data}
  }
}