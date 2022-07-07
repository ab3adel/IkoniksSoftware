import React from 'react'
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import PageBanner from "@/components/page-banner";
import {useRouter} from 'next/router'
import CareerDetails  from '@/components/career-details';
import CareerFrom from '@/components/career-form'
const CareersDetailsPage= () =>{
const router =useRouter()
let {careerId}= router.query
const [open,setOpen]=React.useState(false)
    return (
        <MenuContextProvider>
            <SearchContextProvider>
                <Layout PageTitle="Career Details" >
                  <HeaderOne />
                  <PageBanner title="Career Details" name="Career Details"/>
                  <div className= " container">
                    <div className="row justify-content-center d-flex ">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-8 p-2">
                               <CareerDetails setOpen={setOpen} />
                        </div>
                      
                        <CareerFrom open={open} setOpen={setOpen}/>
                    </div>
                   </div>
                  <Footer /> 

                </Layout>
            </SearchContextProvider>
        </MenuContextProvider>
    )
}
export default CareersDetailsPage;
