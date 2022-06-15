import React, { Fragment } from "react";
import { useTranslation } from 'next-i18next'

const SectionTitle = ({ data }) => {
  const { title, subTitle, text } = data;
  const { t } = useTranslation('common')

  return (
    <Fragment>
      <h4 className="sub_title">{subTitle}</h4>
      <h2 className="sec_title">{title}</h2>
      <p className="sec_desc">{text}</p>
    </Fragment>
  );
};

export default SectionTitle;
