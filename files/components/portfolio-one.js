import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";

const PortfolioOne = ({payload}) => {
  let dataArr=[]
  console.log(payload)
  if (payload.length>0) {
   dataArr= payload.map(ele=> ({image:`http://backend.test.ikoniks.de/${ele.attachment}`
                     ,title:ele.body.en,categories:["All","Development"],url: "/portfolio-details"}))
  }
  return (
    <section className="commonSection porfolioPage">
      <Container>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={dataArr.length >0 ? dataArr[index]:post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        <Row>
          <Col lg={12} className="text-center">
            <a className="common_btn red_bg" href="#">
              <span>Load More</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioOne;
