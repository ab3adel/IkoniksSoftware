import React from "react";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { useRouter } from 'next/router'
const RelatedPortfolio = ({ data, cats }) => {
  const router = useRouter()
  const carouselOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  };
  let dataArr = []
  if (data && data.length > 0) {
    dataArr = data.map(ele => ({
      image: `http://backend.test.ikoniks.de/${ele.attachment}`
      , title: ele.title ? ele.title[router.locale] : '',
      category_id: ele.category_id,
      url: "/portfolio-details", id: ele.id
    }))
  }
  return (
    <section className="commonSection relatedPortfolio pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">our portfolio</h4>
            <h2 className="sec_title">related work</h2>
            <p className="sec_desc">
              We are committed to providing our customers with exceptional
              service while
              <br /> offering our employees the best training.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper className="related_slider" {...carouselOptions}>
              {dataArr.map((post, index) => (
                <SwiperSlide key={index}>
                  <PortfolioCard data={post} cats={cats} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPortfolio;
