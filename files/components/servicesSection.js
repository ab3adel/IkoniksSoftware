import React from "react";
import Parallax from 'parallax-js'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const ServicesSection = () => {
    const [refresh, setRefresh] = React.useState(true)
    React.useEffect(() => {
        // setRefresh(!refresh)
    })
    return (


        <section className="c-section">
            <h2 className="c-section__title"><span>Our Services</span></h2>
            <ul className="c-services">


                <Fade cascade >
                    <li className="c-services__item">
                        <h3>UX Auditing</h3>
                        <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
                        <figure class="effect-ming">
                            <img src="https://digitalupgrade.com/images/companyemail.jpg" alt="img09" class="img-fluid" />
                            <figcaption>
                                <p>VIEW PAGE</p>
                                <a href="/security/access-control" rel="noopener">View more</a>
                            </figcaption>
                        </figure>
                    </li>
                </Fade>
                <Fade cascade >
                    <li className="c-services__item">
                        <h3>Front End Development</h3>
                        <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we&rsquo;re happy to do so.</p>
                        <figure class="effect-ming">
                            <video preload="auto" playsinline="true" loop="true" muted="true" autoPlay="true" className="img-fluid" poster="images/accesscontrolposter.jpg">
                                <source src="https://digitalupgrade.com/images/accesscontrol.webm" type="video/webm" />
                                <source src="https://digitalupgrade.com/images/accesscontrol.mp4" type="video/mp4" />
                            </video>
                            <figcaption>
                                <p>VIEW PAGE</p>
                                <a href="/security/access-control" rel="noopener">View more</a>
                            </figcaption>
                        </figure>

                    </li>
                </Fade>
                <Zoom cascade ssrReveal={true} ssrFadeout={true} >
                    <li className="c-services__item">
                        <h3>UX Consultation</h3>
                        <p>If you don&rsquo;t know what kind of service to request from us, don&rsquo;t worry. We can help and see what fits your business and your budget.</p>
                        <figure class="effect-ming">
                            <video preload="auto" playsinline="true" loop="true" muted="true" autoPlay="true" className="img-fluid" poster="images/accesscontrolposter.jpg">
                                <source src="https://digitalupgrade.com/images/accesscontrol.webm" type="video/webm" />
                                <source src="https://digitalupgrade.com/images/accesscontrol.mp4" type="video/mp4" />
                            </video>
                            <figcaption>
                                <p>VIEW PAGE</p>
                                <a href="/security/access-control" rel="noopener">View more</a>
                            </figcaption>
                        </figure>
                    </li>
                </Zoom>
                <Zoom cascade ssrReveal={true} ssrFadeout={true} >
                    <li className="c-services__item">
                        <h3>Mobile Apps Design</h3>
                        <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                        <figure class="effect-ming">
                            <video preload="auto" playsinline="true" loop="true" muted="true" autoPlay="true" className="img-fluid" poster="images/accesscontrolposter.jpg">
                                <source src="https://digitalupgrade.com/images/accesscontrol.webm" type="video/webm" />
                                <source src="https://digitalupgrade.com/images/accesscontrol.mp4" type="video/mp4" />
                            </video>
                            <figcaption>
                                <p>VIEW PAGE</p>
                                <a href="/security/access-control" rel="noopener">View more</a>
                            </figcaption>
                        </figure>
                    </li>
                </Zoom>
                <Zoom cascade ssrReveal={true} ssrFadeout={true} >

                    <li className="c-services__item  "  >
                        <h3 >Responsive Web Design</h3>
                        <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>

                        <figure class="effect-ming">
                            <img src="https://digitalupgrade.com/images/companyemail.jpg" alt="img09" class="img-fluid" />
                            <figcaption>
                                <p>VIEW PAGE</p>
                                <a href="/security/access-control" rel="noopener">View more</a>
                            </figcaption>
                        </figure>
                    </li>
                </Zoom>
                {/* <Fade cascade >
                    <li className="c-services__item">
                        <h3>UX Research</h3>
                        <p>It&rsquo;s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more. </p>
                        <figure class="effect-ming">
                            <video preload="auto" playsinline="true" loop="true" muted="true" autoPlay="true" className="img-fluid" poster="images/accesscontrolposter.jpg">
                                <source src="https://digitalupgrade.com/images/accesscontrol.webm" type="video/webm" />
                                <source src="https://digitalupgrade.com/images/accesscontrol.mp4" type="video/mp4" />
                            </video>
                            <figcaption>
                                <p>VIEW PAGE</p>
                                <a href="/security/access-control" rel="noopener">View more</a>
                            </figcaption>
                        </figure>

                    </li>
                </Fade> */}
            </ul>
        </section>

    );
};

export default ServicesSection;