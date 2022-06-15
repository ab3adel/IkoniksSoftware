import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ProtfolioDetails from "@/components/protfolio-details";
import RelatedPortfolio from "@/components/related-portfolio";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
import { fetchHome, fetchPortfoilo, fetchSections, fetchPortfoiloCats } from '../lib/fetchData'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// export async function getStaticPaths() {

//   let data = await fetchPortfoilo()

//   const paths = data.payload.map(item => {
//     return {
//       params: { id: toString(item.id) },


//     }
//   })
//   return { paths, fallback: 'blocking', }

// }
// export async function getStaticProps(context) {

//   const id = context.params.id
//   let data = await fetchPortfoilo()
//   let item = data.payload.find(ele => ele.id == id)
//   return {

//     props: { item, data: data.payload.filter(ele => ele.id != id) },
//     revalidate: 300,
//   }


// }


const PortfolioDetailsPage = ({ data, cats }) => {
  const router = useRouter()
  const { item } = router.query
  // console.log("router.query", data)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio Details Page">
          <HeaderOne />
          {item && data && cats ?
            <><PageBanner title={data.payload.find(ele => ele.id == item).title[router.locale]} name="Portfolio" />
              <ProtfolioDetails data={data.payload.find(ele => ele.id == item)} cats={cats.payload} />
              <RelatedPortfolio data={data.payload.filter(ele => ele.id != item)} cats={cats.payload} />
            </>
            : null
          }
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioDetailsPage;

export async function getStaticProps({ locale }) {

  let data = await fetchPortfoilo()
  let cats = await fetchPortfoiloCats()
  return {
    props: { ...await serverSideTranslations(locale, ['common']), data, cats }, revalidate: 300,
  }
}
