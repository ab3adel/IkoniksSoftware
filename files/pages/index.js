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
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";
import {fetchHome} from '../lib/fetchData'

const HomeOne = ({data}) => {
let {payload}=data
let portfolioSection = payload.filter(ele=>ele.title.en === 'OUR PORTFOLIO')

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home One">
          <HeaderOne />
          <SliderOne payload={payload[0]}/>
          <ServiceTwo payload={payload[1]} />
          <AboutTwo payload={payload[2]} />
          <VideoTwo />
          <SubscribeForm />
          <PortfolioHome payload={portfolioSection} />
          <FunfactOne />
          <TrustedClient payload= {payload[5]} />
          {/* <TeamCarousel /> */}
          <ClientCarouselOne />
          <ParallaxOne />
          <BlogHome />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;


export async function getStaticProps () {
  
  let data = await fetchHome()

  return {
    props :{data}
  }
}