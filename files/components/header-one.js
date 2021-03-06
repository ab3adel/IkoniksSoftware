import React, { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import Link from "next/link";
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const HeaderOne = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [sticky, setSticky] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const startAnimationTimer = () => {
    setAnimate(true)

    setTimeout(() => setAnimate(false), 5000)
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);
  useEffect(() => {
    setInterval(() => startAnimationTimer(), 15000)

  }, [])

  return (
    <header
      className={`header_01 ${true === sticky ? "fixedHeader animated flipInX" : null
        }`}
      id="header"
    >
      <Container fluid>
        <Row className="justify-content-between">
          <Col className="col-6" lg={2} md={3} sm={3}>
            <div className="logo">
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
          </Col>
          <Col lg={9} sm={9} md={8} className="d-none d-lg-block ">
            <nav className="mainmenu text-center">
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
                            <a className="langItem" >
                              {router.locale === 'en' ? 'DE' : 'EN'}
                            </a>
                          </Link>
                        </li>
                        :
                        <li

                          className={`${undefined !== links.subItems
                            ? "menu-item-has-children"
                            : router.asPath == links.url ? 'active' : ''
                            }`}
                        >
                          <Link href={links.url}>
                            <a>{t(links.name)}</a>
                          </Link>
                          {undefined !== links.subItems ? (
                            <ul className="sub-menu">
                              {links.subItems.map((subLinks, index) => (
                                <li key={index}>
                                  <Link href={subLinks.url}>
                                    <a>{subLinks.name}</a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      }</React.Fragment    >

                  );
                })}

              </ul>
            </nav>
          </Col>
          <Col lg={2} md={2} sm={4} className="col-6">
            <div className="navigator text-right">
              {/* <a
                className="search searchToggler"
                href="#"
                onClick={handleSearchClick}
              >
                <i className="mei-magnifying-glass"></i>
              </a> */}
              {/* <Link
                href={router.asPath}
                locale={router.locale === 'en' ? 'gr' : 'en'}
              >
                <a className="search searchToggler" >
                  {router.locale === 'en' ? 'DE' : 'EN'}
                </a>
              </Link> */}

              <a
                href="#"
                className="menu mobilemenu d-none d-md-none d-lg-none"
              >
                <i className="mei-menu"></i>
              </a>
              <a
                id="open-overlay-nav"
                className="menu hamburger"
                onClick={handleMenuClick}
                href="#"
              >
                <i className="mei-menu"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header >
  );
};

export default HeaderOne;
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common']),
//   },
// })
