import React from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next'

import Zoom from 'react-reveal/Zoom';
import { useRouter } from 'next/router'
const ServiceCardOne = ({ data }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { title, body, iconName, url, attachment, id } = data;
  return (
    <Zoom cascade ssrReveal={true} ssrFadeout={true} >
      <div className="icon_box_2 text-center">
        <h3>{title[router.locale]}</h3>
        <p dangerouslySetInnerHTML={{ __html: body ? body[router.locale] : "title 2 " }}>
          {/* {body[router.locale]} */}
        </p>
        <div className="iconWrap">
          <img src={`http://backend.test.ikoniks.de/${attachment}`} className="serviceIMG"></img>
          {/* <i className={iconName}></i> */}
        </div>
        <Link href={'/service-details?service=' + data.id}>
          <a>{t("discover more")}</a>
        </Link>
      </div>
    </Zoom>
  );
};

export default ServiceCardOne;
