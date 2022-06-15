import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioDetailsData } from "@/data";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
const ProtfolioDetails = ({ data, cats }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const {
    gallery,


    client,

    date,
    socials
  } = PortfolioDetailsData;
  const { title, attachment, body, category_id } = data
  let categories = ["All", "Development"]
  return (
    <section className="commonSection porfolioDetail">
      <Container>
        <Row>
          <Col lg={8} md={7} sm={12}>
            {/* {gallery.map(({ image }, index) => (
              <div className="portDetailThumb" key={index}>
                <img alt="portDetailThumb" src={image} />
              </div>
            ))} */}
            <div className="portDetailThumb"  >
              <img alt="portDetailThumb" src={`http://backend.test.ikoniks.de/${attachment}`} />
            </div>
          </Col>

          <Col lg={4} md={5} sm={12}>
            <div className="singlePortfoio_content">
              <h3>{title[router.locale]}</h3>
              <p>{body ? body[router.locale] : ''}</p>
            </div>
            {/* <div className="singlePortfoio_content">
              <h4>Clients:</h4>
              <p>{client}</p>
            </div> */}
            <div className="singlePortfoio_content">
              <h4>{t("Category")}:</h4>
              <p>

                {cats.find(cat => cat.id == category_id).name[router.locale]}
              </p>
            </div>
            {/* <div className="singlePortfoio_content">
              <h4>Date:</h4>
              <p>{date}</p>
            </div> */}
            {/* <div className="singlePortfoio_content">
              <h4>Follow:</h4>
              <ul>
                {socials.map(({ name, url }, index) => (
                  <li key={index}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
              </ul>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProtfolioDetails;
