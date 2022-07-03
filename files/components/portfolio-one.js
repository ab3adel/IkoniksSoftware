import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const PortfolioOne = ({ payload, cats }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  let dataArr = []
  console.log(payload)
  if (payload.length > 0) {
    dataArr = payload.map(ele => ({
      image: `http://backend.test.ikoniks.de/${ele.attachment}`
      , title: ele.title ? ele.title[router.locale] : '',
      categories: ["All", "Development"],
      url: "/portfolio-details", id: ele.id,
      category_id: ele.category_id,
    }))
  }
  return (
    <section className="commonSection porfolioPage">
      <Container>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {dataArr.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={post.id}>
                  <PortfolioCard data={post} cats={cats} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        <Row>
          {/* <Col lg={12} className="text-center">
            <a className="common_btn red_bg" href="#">
              <span>Load More</span>
            </a>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioOne;
