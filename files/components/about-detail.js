import React, { Fragment } from "react";

import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import Zoom from 'react-reveal/Zoom';
const SinglePostCard = ({ data }) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <Fragment>
      <div className="single_blog service_section  aboutDet">
        {data && data.map(item => {
          return (
            <Fragment key={item.id}>
              <Zoom cascade ssrReveal={true} ssrFadeout={true} >

                <div className="singleAbout">
                  <div className="blog_headings">

                    <h2>   {item.title[router.locale]} </h2>

                  </div>
                  <div className="blog_details">
                    <p dangerouslySetInnerHTML={{ __html: item.body ? item.body[router.locale] : "title 2 " }}>

                    </p>

                  </div>
                </div>
              </Zoom>
            </Fragment>
          )
        })}


      </div>
    </Fragment>
  );
};

export default SinglePostCard;
