import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blog-home";
import ParallaxOne from "@/components/parallax-1";
import ClientCarouselOne from "@/components/client-carousel-one";
import TeamCarousel from "@/components/team-carousel";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import PortfolioHome from "@/components/portfolio-home";
import SubscribeForm from "@/components/subscribe-form";
import ServiceTwo from "@/components/service-two";
import AboutTwo from "@/components/about-two";
import VideoTwo from "@/components/video-two";

// import ServicesSection from "@/components/ServicesSection";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
// import Portfolio from "@/components/Portfolio";
import SliderBanner from "@/components/SliderBanner/SliderBanner";
import { fetchHome, fetchServices, fetchPosts, fetchSections } from '../lib/fetchData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


import dynamic from 'next/dynamic'
// import  from ;
const CustomCursor = dynamic(async () => await import('custom-cursor-react'), { ssr: false },)
const Portfolio = dynamic(async () => await import("@/components/Portfolio"), { ssr: false },)
const ServicesSection = dynamic(async () => await import("@/components/servicesSection"), { ssr: false },)
const HomeOne = ({ sections, posts }) => {
  let homePostes = posts.payload.slice(0, 3)
  // let portfolioSection = payload.filter(ele => ele.title.en === 'OUR PORTFOLIO')
  let about = sections.payload.find(ele => ele.id === 14).categories.find(ele => ele.id === 14).nodes[0]
  let portfolioSection = sections.payload.find(ele => ele.id === 16).categories.find(ele => ele.id === 16).nodes
  let sliderData = sections.payload.find(ele => ele.id === 13).categories.find(ele => ele.id === 18).nodes
  let servicesData = sections.payload.find(ele => ele.id === 19)
  let clients = sections.payload.find(ele => ele.id === 27)

  return (
    < MenuContextProvider >
      <SearchContextProvider>
        <Layout PageTitle="IKONIKS Software">
          <CustomCursor
            targets={['.link', 'a', 'button', 'input', '.your-css-selector']}
            customClass='cursor-circle'
            dimensions={38}
            fill='#eb3064'
            strokeColor='#23abe2'
            strokeWidth={10}
            smoothness={{
              movement: 0.2,
              scale: 0.6,
              opacity: 0.5,
            }}
            targetOpacity={0.2}
            targetScale={2}

          />
          <HeaderOne />
          <SliderBanner data={sliderData} />
          <AboutTwo payload={about} />

          {/* <ServiceTwo data={servicesData} /> */}
          <ServicesSection data={servicesData} />

          {/* <VideoTwo /> */}
          {/* <PortfolioHome payload={portfolioSection} /> */}
          <Portfolio withTitle={true} />
          <BlogHome posts={homePostes} />
          <ClientCarouselOne payload={clients} />


          {/* <FunfactOne /> */}
          {/* <TrustedClient
          //  payload={payload[5]}
          /> */}
          {/* <TeamCarousel /> */}


          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider >
  );
};

export default HomeOne;


export async function getStaticProps({ locale }) {

  let posts = await fetchPosts()
  // let services = await fetchServices()
  let sections = await fetchSections()
  return {
    props: { ...await serverSideTranslations(locale, ['common']), sections, posts }, revalidate: 300,
  }
}
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common']),
//   },
// })