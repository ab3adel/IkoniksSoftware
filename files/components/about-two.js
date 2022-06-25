import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

const AboutTwo = ({ payload }) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  let image = null
  let title = null
  let body = null
  let attachment = null
  if (payload) {
    attachment = payload.attachment
    title = payload.title
    body = payload.body
    image = `http://backend.test.ikoniks.de/${attachment}`

  }
  const { sectionContent, button, gallery } = AboutTwoData;

  return (
    <section className="commonSection ab_agency service_section " id="toAbout">
      {/* <div class="neon-light"></div> */}
      <a href="#" class="neon-button"> </a>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79" >
            <h4 className="sub_title">{t("welcom to IKONIKS SOFTWARE")}</h4>
            <h2 className="sec_title MB_45">{title ? title[router.locale] : "title"}</h2>
            <p className="sec_desc" dangerouslySetInnerHTML={{ __html: body ? body[router.locale] : "title 2 " }}>

            </p>
            <Link href={"/about"}>
              <a className="common_btn red_bg">
                <span>{t("LEARN MORE")} </span>
              </a>
            </Link>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className={`ab_img2`}  >
              <img src={image ? image : ''} alt="" />
            </div>
            {/* {gallery.map((item, index) => (
              <div className={`ab_img${index + 1}`} key={index}>
                <img src={image ? image : ''} alt="" />
              </div>
            ))} */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
