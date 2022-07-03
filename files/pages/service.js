import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceOne from "@/components/service-one";
import ServiceTwo from "@/components/service-two";
import ServiceThree from "@/components/service-three";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import ClientCarouselOne from "@/components/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

import { fetchHome, fetchServices, fetchSections } from '../lib/fetchData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const ServicePage = ({ sections }) => {
  let servicesData = sections.payload.find(ele => ele.id === 19).categories.find(ele => ele.id === 38).nodes
  let clients = sections.payload.find(ele => ele.id === 27)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services Page">
          <HeaderOne />
          <PageBanner title="Services" name="Services" />
          <ServiceOne data={servicesData} />
          {/* <ServiceTwo />
          <ServiceThree /> */}
          {/* <FunfactOne /> */}
          {/* <TrustedClient extraClassName="pb_120" payload={null} /> */}
          <ClientCarouselOne payload={clients} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
export async function getStaticProps({ locale }) {

  // let data = await fetchHome()
  // let services = await fetchServices()
  let sections = await fetchSections()
  return {
    props: { ...await serverSideTranslations(locale, ['common']), sections }, revalidate: 300,
  }
}