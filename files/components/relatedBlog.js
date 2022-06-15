import React from "react";

import BlogCard from "@/components/blog-card";
import { BlogData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { useRouter } from 'next/router'
const RelatedBlog = ({ }) => {
    const router = useRouter()
    const carouselOptions = {
        spaceBetween: 0,
        slidesPerView: 1,
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


    return (
        <section className="commonSection relatedPortfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">

                        <h2 className="sec_title">related Blogs</h2>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper className="related_slider" {...carouselOptions}>
                            {BlogData.map((post, index) => (
                                <SwiperSlide key={index}>
                                    <BlogCard data={post} />
                                </SwiperSlide>
                            ))}
                            <div
                                className="swiper-pagination"
                                id="client-carousel-pagination"
                            ></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedBlog;
