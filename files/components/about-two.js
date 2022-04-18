import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";

const AboutTwo = ({payload}) => {
  let {body,title,attachment}=payload
  const { sectionContent, button, gallery } = AboutTwoData;
  let Image =`http://backend.test.ikoniks.de/${attachment}`

  return (
    <section className="commonSection ab_agency">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title MB_45">{title.en}</h2>
            <p className="sec_desc">{body.en}</p>
            <a className="common_btn red_bg" href={button.url}>
              <span>{button.label}</span>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            {gallery.map((item, index) => (
              <div className={`ab_img${index + 1}`} key={index}>
                <img src={Image} alt="" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
