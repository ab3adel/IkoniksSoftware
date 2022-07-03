import React, { useContext, Fragment, useRef, useState } from "react";
import Link from "next/link";
import { MenuContext } from "@/context/menu-context";
import { LogoImage, NavLinks } from "@/data";

import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
const PopupMenu = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const [animate, setAnimate] = useState(false);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="show-overlay-nav">
      <div className="popup popup__menu">
        <a
          href=""
          id="close-popup"
          onClick={handleMenuClick}
          className="close-popup"
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div className="logo2">
                <Link href="/">
                  <a>
                    IK
                    <div className="twoChars"
                      style={{ animationName: animate ? 'circleMotionTwoChars' : '' }} >
                      ON
                    </div>
                    IKS
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="popup-inner">
                <nav
                  className="popup-menu dl-menu__wrap text-center"
                  ref={menuEl}
                >
                  <ul>
                    {NavLinks.map((links, index) => {
                      return (
                        <React.Fragment key={index} >
                          {links.name === "lang" ?

                            <li>
                              <Link
                                href={router.asPath}
                                locale={router.locale === 'en' ? 'gr' : 'en'}
                              >
                                <a  >
                                  {router.locale === 'en' ? 'DE' : 'EN'}
                                </a>
                              </Link>
                            </li>
                            :
                            <li
                              key={index}
                              className={`${undefined !== links.subItems
                                ? "menu-item-has-children"
                                : ""
                                }`}
                            >
                              <Link href={links.url}>
                                <a>{t(links.name)}</a>
                              </Link>
                              {undefined !== links.subItems ? (
                                <Fragment>
                                  <button
                                    onClick={(e) => {
                                      menuEl.current
                                        .querySelectorAll(".sub-menu")
                                        .forEach((item) => {
                                          item.classList.remove("show");
                                        });

                                      let clickedItem = e.currentTarget.parentNode;
                                      clickedItem
                                        .querySelector(".sub-menu")
                                        .classList.toggle("show");
                                    }}
                                  >
                                    <i className="fa fa-angle-down"></i>
                                  </button>
                                  <ul className="sub-menu">
                                    {links.subItems.map((subLinks, index) => (
                                      <li key={index}>
                                        <Link href={subLinks.url}>
                                          <a>{subLinks.name}</a>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </Fragment>
                              ) : null}
                            </li>
                          }
                        </React.Fragment    >


                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left">
              <ul className="footer__contacts">
                <li>Phone: (+49) 173 9354932</li>
                <li>Email: service@ikoniks.de</li>
                <li>
                  Address: Filderbahnplatz.3570567 Stuttgart
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="popUp_social text-center text-md-right">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
