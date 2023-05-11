
import React from 'react';
import MyImg2 from "../components/ContactAbout/img/MyImg2.png";
import { RiProfileFill, RiGithubFill, RiWhatsappFill, RiLinkedinBoxFill } from "react-icons/ri";



const About = () => {
    return (
        <div className="container mt-5 ">
            <h2 className="mb-3 " > <strong>About Us</strong> </h2>

            <img src={MyImg2} alt="" className="mx-auto d-block fade-in" />
            <h6 className="my-4 " >
                "Food is Energy and Energy is Life."
            </h6>
            <h6 className="my-4" >
                "We are grateful to share these products and our services with you."
            </h6>
            <h6 className="my-4" >
                "Marketmate.com"
            </h6>
            <p className="my-3">
                {/* inside the p tag 3 p tags */}
                <p className="my-3">
                    <strong>Marketmate.com</strong>  makes more food products more accessible to more people than ever before. Our ecommerce website is accessible by all visitors to positively impact businesses
                    and consumers alike. We have partnered with the largest nationwide distributor removing costs and complexities from the supply chain for our customers. With 14 distribution centers
                    across the country we typically deliver in three to five business days. We can redistribute 10 stocked products from more than 1,000 suppliers and our special order items are
                    available as well.   </p>
                <p className="my-3">
                    To meet consumer demands we are currently offering the top-selling and trending dry-goods and temperature controlled products including refrigerated, frozen, dairy, convenience store,
                    specialty retail, natural and specialty foods, organic and plant-based, global imports, and more.
                </p>
                <p className="my-3">
                    We are excited to work with you and earn your ongoing business and support.
                </p>

            </p>

            {/* Team */}
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <br /><br />

                        <  h2 className="mb-3 ">Our Team</h2>
                        <br />
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                            style={{ marginBottom: "5%" }}>
                            <div className="member d-flex align-items-start">
                                <div className="member-info">
                                    <h4>Farah Almasri</h4>
                                    <span>Full Stack Developer</span>
                                    <div className="social">
                                        <a href="https://falmasri98.github.io/Portfolio/">
                                            <RiProfileFill />
                                        </a>
                                        <a href="https://github.com/falmasri98">
                                            <RiGithubFill />
                                        </a>
                                        <a href="https://wa.me/962799010691?text=Hello">
                                            <RiWhatsappFill />
                                        </a>
                                        <a href="https://www.linkedin.com/in/farah-almasri/">
                                            <RiLinkedinBoxFill />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                            style={{ marginBottom: "5%" }}>
                            <div className="member d-flex align-items-start">
                                <div className="member-info">
                                    <h4>Issa Zeidan </h4>
                                    <span>Full Stack Developer</span>
                                    <div className="social">
                                        <a href="https://issazeidan.github.io/Portfolio/">
                                            <RiProfileFill />
                                        </a>
                                        <a href="https://github.com/IssaZeidan">
                                            <RiGithubFill />
                                        </a>
                                        <a href="https://wa.me/962777627435?text=Hello">
                                            <RiWhatsappFill />
                                        </a>
                                        <a href="https://www.linkedin.com/in/issa-zeidan-599790166/">
                                            <RiLinkedinBoxFill />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                            style={{ marginBottom: "5%" }}>
                            <div className="member d-flex align-items-start">
                                <div className="member-info">
                                    <h4>Mahmoud Hassan</h4>
                                    <span>Full Stack Developer</span>
                                    <div className="social">
                                        <a href="https://mahmoud-hassan98.github.io/Portfolio/">
                                            <RiProfileFill />
                                        </a>
                                        <a href="https://github.com/Mahmoud-Hassan98">
                                            <RiGithubFill />
                                        </a>
                                        <a href="https://wa.me/962781158939?text=Hello">
                                            <RiWhatsappFill />
                                        </a>
                                        <a href="https://www.linkedin.com/in/mahmoud-hassan-jo/">
                                            <RiLinkedinBoxFill />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                            style={{ marginBottom: "5%" }}>
                            <div className="member d-flex align-items-start">
                                <div className="member-info">
                                    <h4>Issam Addi</h4>
                                    <span>Full Stack Developer</span>
                                    <div className="social">
                                        <a href="https://www.linkedin.com/in/issam-addi-09148a267/">
                                            <RiProfileFill />
                                        </a>
                                        <a href="https://github.com/Issam-Addi">
                                            <RiGithubFill />
                                        </a>
                                        <a href="https://wa.me/962786992500?text=Hello">
                                            <RiWhatsappFill />
                                        </a>
                                        <a href="https://issam-addi.github.io/My-protfolio/">
                                            <RiLinkedinBoxFill />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div
                            className="col-lg-4"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                            style={{ marginBottom: "5%" }}>
                            <div className="member d-flex align-items-start">
                                <div className="member-info">
                                    <h4>Saad Zireeni</h4>
                                    <span>Full Stack Developer</span>
                                    <div className="social">
                                        <a href="https://saad-zireeni.github.io/Portfolio//">
                                            <RiProfileFill />
                                        </a>
                                        <a href="https://github.com/saad-zireeni">
                                            <RiGithubFill />
                                        </a>
                                        <a href="https://wa.me/962797967092?text=Hello">
                                            <RiWhatsappFill />
                                        </a>
                                        <a href="https://www.linkedin.com/in/saad-zireeni/">
                                            <RiLinkedinBoxFill />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
