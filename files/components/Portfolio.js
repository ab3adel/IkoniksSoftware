import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import { PortfolioHomeData, PortfolioData } from "@/data";
import { useTranslation } from 'next-i18next'
import Isotope from 'isotope-layout'
import Link from "next/link";
import { useRouter } from 'next/router'
// import dynamic from 'next/dynamic'
// const Isotope = dynamic(async () => await import('isotope-layout'), { ssr: false },)
const Portfolio = ({ withTitle }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [fetchedData, setfetchedData] = useState('')
  const [fetchedCats, setfetchedCats] = useState('')
  const { sectionContent } = PortfolioHomeData;
  useEffect(async () => {
    const fetchCategories = async (e) => {
      try {
        const responsee = await fetch(
          `http://backend.test.ikoniks.de/api/website/categories?section=16`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (responsee.status == '204') { setfetchedCats([]) }
        const response = await responsee.json();

        if (response.payload) { setfetchedCats(response.payload) }
      }
      catch (err) { console.log(err); }
    }

    await fetchCategories()
  }, [])

  useEffect(async () => {
    const fetchNodes = async (e) => {
      try {
        const responsee = await fetch(
          `http://backend.test.ikoniks.de/api/website/nodes?section=16`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (responsee.status == '204') { setfetchedData([]) }
        const response = await responsee.json();

        if (response.payload) { setfetchedData(response.payload) }
      }
      catch (err) { console.log(err); }
    }

    await fetchNodes()
  }, [])

  const IsotopeReact = ({ fetchedCats, fetchedData }) => {
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')

    // initialize an Isotope object with configs
    React.useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    React.useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)

    return (
      <>
        <ul class="filter text-center mb-0 mt-60 mt-xs-30" data-aos="fade-up"
          data-aos-duration="1200">
          <li><a onClick={handleFilterKeyChange('*')} className={filterKey == '*' && "activeFilter"}>
            {t('All works')}</a></li>
          {fetchedCats && fetchedCats.map((category, index) => {
            return (
              <li key={category.id}>


                <a onClick={handleFilterKeyChange(`cat${category.id}`)}
                  className={filterKey == `cat${category.id}` && "activeFilter"}>
                  {category.name[router.locale]}
                </a>
              </li>
            )
          })}

        </ul>

        <hr />
        <div className='container'>
          <div className=" row filter-container">
            {fetchedData && fetchedData.map((item, index) => {
              return (
                <div key={item.id} className={`col-md-6 col-lg-4 singlefolio filter-item cat${item.category_id.toString()}`}>
                  <img src={`http://backend.test.ikoniks.de/${item.attachment}`} alt={item.title[router.locale]} />
                  <div className="folioHover">
                    <a className="cate" href="#">

                      {fetchedCats.find(cat => cat.id == item.category_id).name[router.locale]}
                    </a>
                    <h4>
                      <Link href={`/portfolio-details?item=${item.id}`}>
                        <a  >{item.title[router.locale]}</a>
                      </Link>

                    </h4>
                  </div>
                </div>

              )
            })}





          </div>
        </div>

      </>
    )
  }
  return (

    <>




      <div className='section mt-5 pt-5' id='Portfolio'  >
        <div className='container'>
          <Row>
            {withTitle ? <Col lg={12} className="text-center">
              <SectionTitle data={{
                subTitle: t("OUR PORTFOLIO"),
                title: t("WORK SHOWCASE"),
                text: t("We are committed to")

              }
              } />
            </Col> : null}
          </Row>
        </div>
        <div className='container'>
          <div className="row text-center">
            <div class="col-md-8 col-md-offset-2 text-center mt-30 mt-xs-10">

            </div>
          </div>
        </div>

        {fetchedCats && fetchedData && <IsotopeReact fetchedCats={fetchedCats} fetchedData={fetchedData} />}
      </div>

    </>
  )
}

export default Portfolio
