import React from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next'
const CallToActionOne = ({ extraClassName, buttonClass }) => {
  const { t } = useTranslation('common')

  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 className="sec_title white">{t("LET'S GET YOUR PROJECT STARTED!")}</h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <Link href="/contact">
              <a className={`common_btn ${buttonClass}`}>
                <span>{t("Contact with us")}</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
