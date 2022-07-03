import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioDetailsData } from "@/data";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";


SwiperCore.use([Autoplay, Navigation, EffectFade]);
import "swiper/swiper-bundle.min.css";
const ProtfolioDetails = ({ data, cats }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const {
    gallery,
    client,
    date,
    socials
  } = PortfolioDetailsData;
  const carouselOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true
    },

  };
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      nextEl: "#main-slider-next1",
      prevEl: "#main-slider-prev1"
    },
    autoplay: {
      delay: 5000
    }
  };
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
              <Swiper {...mainSlideOptions}>

                {data && data.files && data.files.length > 0 ? data.files.map((file, index) => (
                  <SwiperSlide key={index}>
                    <img alt="portDetailThumb" src={`http://backend.test.ikoniks.de/${file.url}`} />
                  </SwiperSlide>
                ))

                  :
                  <SwiperSlide  >
                    <img alt="portDetailThumb" src={`http://backend.test.ikoniks.de/${attachment}`} />
                  </SwiperSlide>
                }
                <div className="swiper-button-prev" id="main-slider-prev1">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="swiper-button-next" id="main-slider-next1">
                  <i className="fa fa-angle-right"></i>
                </div>
              </Swiper>
              {/* <Swiper className="related_slider" {...carouselOptions}>
                <SwiperSlide  >
                  <img alt="portDetailThumb" src={`http://backend.test.ikoniks.de/${attachment}`} />
                </SwiperSlide>
                {data && data.files && data.files.length > 0 && data.files.map((file, index) => (
                  <SwiperSlide key={index}>
                    <img alt="portDetailThumb" src={`http://backend.test.ikoniks.de/${file.url}`} />
                  </SwiperSlide>
                ))}
              </Swiper> */}

            </div>
          </Col>

          <Col lg={4} md={5} sm={12}>
            <div className="singlePortfoio_content">
              <h3>{title[router.locale]}</h3>
              <p dangerouslySetInnerHTML={{ __html: body ? body[router.locale] : '' }}>{ }</p>
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
