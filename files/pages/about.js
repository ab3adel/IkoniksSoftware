import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import { fetchAbout } from '../lib/fetchData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
const AboutPage = ({ data }) => {
  const { payload } = data

  const { t } = useTranslation('common')
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About Us Page">
          <HeaderOne />
          <PageBanner title={t("About")} name="About" />
          <AboutOne payload={payload[1]} />
          {/* <TestimonialsOneCarousel /> */}
          {/* <SubscribeForm /> */}
          {/* <TeamCarousel /> */}
          {/* <VideoOne />
          <FeatureTabOne /> */}
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
export async function getStaticProps({ locale }) {

  let data = await fetchAbout()

  return {
    props: { ...await serverSideTranslations(locale, ['common']), data }, revalidate: 300,
  }
}