import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
const ServiceSidebar = ({ data }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">{t("Services")}</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            {data ?
              <>
                {data.map((post,) => (

                  <React.Fragment key={post.id} >
                    {
                      post.id !== 90 ?
                        <li>

                          <Link href={'/service-details?service=' + post.id}>
                            <a href="#">{post.title[router.locale]}</a>
                          </Link>

                        </li>
                        :
                        null
                    }
                  </React.Fragment>
                ))}
              </>




              : null}

          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>{t("need IKONIKS help?")}</h4>
          <p> {t("Prefer speaking with")}
          </p>
          <h2> {`(+49) 173 9354932`}</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
