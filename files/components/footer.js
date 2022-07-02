import React from "react";
import { LogoImage } from "@/data";
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { light } = LogoImage;
  const { t } = useTranslation('common')
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <div className="logo">
                <Link href="/">
                  <a>
                    IK
                    <div className="twoChars"
                    >
                      ON
                    </div>
                    IKS
                  </a>
                </Link>
              </div>
              <p>
                Welcome to our web design agency. Lorem ipsum is simply free
                text dolor sit amet consectetur adipisicing elit. Tempore
                corrupti temporibus fuga earum asperiores, alias excepturi sit
                mpedit fugit laudantium.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">{t("Contact")} </h3>
              <p>
                Filderbahnplatz.3570567 Stuttgart
                <br />
                Germany
              </p>
              <p>P: (+49) 173 9354932</p>
              <p>
                E: <a href="#">service@ikoniks.de</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">{t("Social")} </h3>
              <ul>
                <li>
                  <a target="_blank" href="https://twitter.com/IKONIKS5">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/Ikoniks-101486788394291">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://www.instagram.com/i_koniks/?hl=de">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UC-ggTO1LtzSKyUIsHBgr0pQ">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.pinterest.de/ikoniks2020/_saved/">
                    <i className="fa fa-pinterest"></i>Pinterest
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">Ikoniks Software </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
