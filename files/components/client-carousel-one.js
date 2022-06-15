import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ClientCarouselData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import { useRouter } from 'next/router'

SwiperCore.use([Pagination]);

const ClientCarouselOne = ({ payload }) => {
  const router = useRouter()
  const { sectionContent, items } = ClientCarouselData;
  const { title, subTitle, text } = sectionContent;

  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: "#client-carousel-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  };

  return (
    <section className="commonSection client">
      {payload ? <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title">{payload.name[router.locale]}</h4>
            <h2 className="sec_title">{payload.categories[0].name[router.locale]}</h2>
            <p className="sec_desc">{payload.description[router.locale]}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Swiper className="client_slider" {...carouselOptions}>
              {payload.categories[0].nodes.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="singleClient">
                    <Link href={"#"}>
                      <a>
                        <img src={`http://backend.test.ikoniks.de/${item.attachment}`} alt="" />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              <div
                className="swiper-pagination"
                id="client-carousel-pagination"
              ></div>
            </Swiper>
          </Col>
        </Row>
      </Container> : null}
    </section>
  );
};

export default ClientCarouselOne;
