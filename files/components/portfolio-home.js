import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData } from "@/data";
import { useRouter } from 'next/router'

const PortfolioHome = ({ payload }) => {
  const router = useRouter()
  const { sectionContent } = PortfolioHomeData;
  let dataArr = []
  if (payload && payload.length > 0) {
    dataArr = payload.map(ele => ({
      image: `http://backend.test.ikoniks.de/${ele.attachment}`
      , title: ele.title[router.locale], categories: ["All", "Development"], url: "/portfolio-details", id: ele.id
    }))
  }

  return (
    <section className="commonSection porfolio" id="porfolio">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={payload && payload.length > 0 ? dataArr[index] : post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;
