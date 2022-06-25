import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";

import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import { useRouter } from 'next/router'



import dynamic from 'next/dynamic'
// import  from ;
const CustomCursor = dynamic(async () => await import('custom-cursor-react'), { ssr: false },)

const HomeOne = ({ }) => {
    const router = useRouter()


    return (
        < MenuContextProvider >
            <SearchContextProvider>
                <Layout PageTitle="IKONIKS Software">
                    <CustomCursor
                        targets={['.link', 'a', 'button', 'input', '.your-css-selector']}
                        customClass='cursor-circle'
                        dimensions={38}
                        fill='#eb3064'
                        strokeColor='#23abe2'
                        strokeWidth={10}
                        smoothness={{
                            movement: 0.2,
                            scale: 0.6,
                            opacity: 0.5,
                        }}
                        targetOpacity={0.2}
                        targetScale={2}

                    />
                    <HeaderOne />
                    <div className="section impress-Section">
                        <div className="container">

                            {router.locale == 'gr' ?
                                <div className="row">


                                    <div className="col-md-12">
                                        <div className="wpb_wrapper">
                                            <h2>Angaben gemäß § 5 TMG</h2>
                                            <p>Maher Albaba
                                                <br /> Filderbahnplatz.35
                                                <br /> Gebäude 44
                                                <br /> 70567 Stuttgart
                                            </p>
                                            <h2>Kontakt</h2>
                                            <p>Telefon: 01739354932<br />
                                                E-Mail: service@ikoniks.de
                                            </p>
                                            <h2>Umsatzsteuer-ID</h2>
                                            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                                                <br />
                                                93002/39206</p>
                                            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                                            <p>Berufsbezeichnung: Softwareentwickler
                                                <br /> Zuständige Kammer:
                                                <br /> Verliehen in:
                                            </p>
                                            <p>Es gelten folgende berufsrechtliche Regelungen:</p>
                                            <h2>EU-Streitschlichtung</h2>
                                            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                                                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                                                    https://ec.europa.eu/consumers/odr/</a>
                                                .<br />
                                                Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                                            <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                                            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

                                            </p>
                                            <p>Quelle:{' '}
                                                <a href="https://www.e-recht24.de">eRecht24</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                :
                                <div className="row">


                                    <div className="col-md-12">
                                        <div className="wpb_wrapper">
                                            <h2>According to § 5 TMG</h2>
                                            <p>Maher Albaba
                                                <br /> Filderbahnplatz.35
                                                <br /> Building 44
                                                <br /> 70567 Stuttgart
                                            </p>
                                            <h2>Contact</h2>
                                            <p> Phone: 01739354932<br />
                                                E-Mail: service@ikoniks.de
                                            </p>
                                            <h2>Tax ID</h2>
                                            <p>Sales tax identification number according to § 27 a sales tax law:
                                                <br />
                                                93002/39206</p>
                                            <h2>Job title and professional regulations</h2>
                                            <p>Job Title: Software Developer
                                                <br /> Responsible chamber:
                                                <br /> Awarded to:
                                            </p>
                                            <p>The following professional regulations apply:</p>
                                            <h2>EU Dispute Settlement</h2>
                                            <p>The European Commission provides a platform for online dispute resolution (OS):{' '}
                                                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                                                    https://ec.europa.eu/consumers/odr/</a>
                                                .<br />
                                                Our E-mail Address Can Be Found Above In The Imprint.</p>
                                            <h2>Consumer dispute resolution/universal arbitration board</h2>
                                            <p>We are not willing or obliged to participate in dispute settlement procedures before a consumer arbitration board.

                                            </p>
                                            <p>Source:{' '}
                                                <a href="https://www.e-recht24.de">eRecht24</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            }
                        </div>
                    </div>
                    <CallToActionOne extraClassName="ready" />
                    <Footer />
                </Layout>
            </SearchContextProvider>
        </MenuContextProvider >
    );
};

export default HomeOne;


