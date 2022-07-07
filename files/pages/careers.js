import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import PageBanner from "@/components/page-banner";
import CareersList from '@/components/careers-list'


const Careers =()=>{



    return (
        <MenuContextProvider>
            <SearchContextProvider>
                <Layout PageTitle={'Careers'} >
                  <HeaderOne />
                  <PageBanner title="Careers" name="Careers" />
                  <CareersList />
                  <Footer />
                </Layout>
            </SearchContextProvider>
        </MenuContextProvider>

    )
}

export default Careers;