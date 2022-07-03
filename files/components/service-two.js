import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePostTwoData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";
import { fetchServices } from '../lib/fetchData'
// import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'


const ServiceTwo = ({ data }) => {
  // const router = useRouter()
  const { t } = useTranslation('common')
  // const { sectionContent, posts } = ServicePostTwoData;
  // const { title, subTitle, text } = sectionContent;
  // let { payload } = dataa
  // const fetched = useMemo(async () => {
  //   let res = await fetchServices().then(data => { return data.payload })
  //   return res
  // })

  return (
    <section className="service_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title red_color">{t("SERVICES WE ARE OFFERING")}</h4>
            <h2 className="sec_title white">{t("WE DESIGN DIGITAL")}</h2>
            <p className="sec_desc color_aaa">{t("We are committed to")}</p>
          </Col>
        </Row>
        <Row className="custom_column">
          {data && data.map((item, index) => (
            <React.Fragment key={item.id} >
              {
                item.id !== 90 ?
                  <Col lg={3} md={6} sm={12}>
                    <ServiceCardTwo data={item} />
                  </Col>
                  :
                  null
              }
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceTwo;

