import React from "react";
import { AboutOneData } from "@/data";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const AboutOne = ({ payload }) => {
  const router = useRouter()
  const { sectionContent, gallery, counter } = AboutOneData;
  const { t } = useTranslation('common')
  let image = null
  let image1 = null
  let title = null
  let body = null
  title = payload.title
  body = payload.body
  if (payload) {
    image1 = `http://backend.test.ikoniks.de/${payload.attachment}`
    image = `http://backend.test.ikoniks.de/${payload.background}`
    title = payload.title
    body = payload.body
  }
  return (
    <section className="commonSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h4 className="sub_title">{payload ? title[router.locale] : null}</h4>
            <h2 className="sec_title">{payload ? body[router.locale] : null}</h2>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="agency_img1">
              <img src={image ? image : gallery[0]} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="agency_img2">
              <img src={image1 ? image1 : gallery[1]} alt="" />
            </div>
            <div className="compay_date">
              <h5>{t("Company Started")}</h5>
              <h2>{counter.number}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
