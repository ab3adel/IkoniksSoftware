import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link";
import { useTranslation } from 'next-i18next'

import { fetchServices } from '../lib/fetchData'
const ServiceDetailsPage = ({ data }) => {
  const router = useRouter()
  const { service } = router.query
  const { t } = useTranslation('common')

  // console.log("router.query", router.query)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Service Details Page">
          <HeaderOne />
          <PageBanner title={t("Service Details")} name="Service" />
          <ServiceDetails service={service} data={data.payload} />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
export async function getStaticProps({ locale }) {

  let data = await fetchServices()

  return {
    props: { ...await serverSideTranslations(locale, ['common']), data }, revalidate: 300,
  }
}
