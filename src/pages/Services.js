import React from "react";
import "../assets/styles/services.css";
import icons from "../assets/img/serviceicons1.svg";
import icons2 from "../assets/img/icons2.svg";
import icons3 from "../assets/img/icons3.svg";
import icons4 from "../assets/img/icons4.svg";
import icons5 from "../assets/img/icons5.svg";
import icons6 from "../assets/img/icons6.svg";

export default function Services() {
  return (
    <>
      <div className="Services">
        <h2 className="text-center">
          Innovative IT Solutions for Progressive Business Growth
        </h2>
        <div className="container">
          <div className="box">
            <div className="row all2 align-items-center">
              <div className="col-lg-8 col-md-9">
                <div className="left">
                  <h5>IT Solutions</h5>
                  <p>
                    We specialize in developing IT strategies that are uniquely
                    customized to align with your business objectives. Our
                    comprehensive solutions include system integration,
                    effectively streamlining your disparate software and
                    hardware into a cohesive, functioning unit. A key focus of
                    ours is robust data management, ensuring the security,
                    integrity, and accessibility of your crucial business
                    information. We actively keep your IT infrastructure
                    up-to-date, adapting to new technological advancements to
                    maintain your competitive edge.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-3">
                <div className="right">
                  <img src={icons} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="row all align-items-center">
              <div className="col-lg-4 col-md-3">
                <div className="left leftreverse">
                  <img src={icons2} alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-9">
                <div className="right1">
                  <h5 style={{ textAlign: "end", marginRight: "27px" }}>
                    Web Development
                  </h5>
                  <p style={{ textAlign: "right" }}>
                    KOIKOM’s web development team is dedicated to creating
                    unique, visually appealing, and user-friendly websites. We
                    place a strong emphasis on user experience, ensuring easy
                    navigation and a positive interaction for all visitors. Our
                    web solutions are thoughtfully designed to reflect your
                    brand’s ethos and effectively engage your target audience.
                    Incorporating the latest in web technology, we build
                    dynamic, responsive, and fast-loading sites. From the
                    initial concept to final launch, we offer comprehensive web
                    development services, inclusive of ongoing maintenance and
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="row all2 align-items-center">
              <div className="col-lg-8 col-md-9">
                <div className="left">
                  <h5>Networking Services</h5>
                  <p>
                    Our networking services are centered around providing secure
                    and reliable connectivity, crucial for uninterrupted
                    business operations. We design and implement custom networks
                    that are optimized for performance, tailored to your
                    business’s size and requirements. Security is paramount in
                    our networking solutions, with robust protocols in place to
                    safeguard your data and systems. Additionally, we provide
                    continuous network management and support, ensuring
                    efficient operation and minimizing potential downtime. Our
                    scalable networking solutions are designed to grow with your
                    business, facilitating seamless expansion and adaptation.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-3">
                <div className="right">
                  <img src={icons3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="row all align-items-center">
              <div className="col-lg-4 col-md-3">
                <div className="left leftreverse">
                  <img src={icons4} alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-9">
                <div className="right1">
                  <h5 style={{ textAlign: "end", marginRight: "27px" }}>
                    SEO Optimization
                  </h5>
                  <p style={{ textAlign: "right" }}>
                    Our SEO optimization services are focused on increasing your
                    website's visibility and attracting more traffic from search
                    engines. Our team employs strategic, up-to-date SEO
                    techniques tailored to your specific market and audience. We
                    conduct thorough keyword research, optimize website content,
                    and improve technical SEO aspects to boost your site's
                    ranking. Our approach not only increases organic search
                    traffic but also enhances user engagement and conversion
                    rates. We provide regular analytics and reports, enabling
                    you to see the tangible results of our SEO efforts and make
                    informed dec
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="row all2 align-items-center">
              <div className="col-lg-8 col-md-9">
                <div className="left">
                  <h5>App Optimization</h5>
                  <p>
                    Our App Optimization service focuses on refining and
                    improving your mobile applications to ensure they meet the
                    high standards of today's tech-savvy users. We concentrate
                    on enhancing the app's overall performance, including its
                    speed, functionality, and user interface design. Our team
                    works to resolve any technical issues, ensuring a smooth and
                    engaging user experience. We also implement the latest
                    trends and features in app development to keep your
                    application ahead of the curve. With KOIKOM, your mobile app
                    is not just functional but also a tool that truly resonates
                    with your users and meets their expectations.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-3">
                <div className="right">
                  <img src={icons5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="row all align-items-center">
              <div className="col-lg-4 col-md-3">
                <div className="left leftreverse">
                  <img src={icons6} alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-9">
                <div className="right1">
                  <h5 style={{ textAlign: "end", marginRight: "27px" }}>
                    Data Recovery
                  </h5>
                  <p style={{ textAlign: "right" }}>
                    KOIKOM’s Data Recovery service provides a vital safety net
                    for businesses facing data loss or damage. Our team of
                    experts specializes in retrieving lost or compromised data,
                    employing state-of-the-art recovery techniques. We
                    understand the critical nature of your data and work
                    diligently to recover it as quickly and efficiently as
                    possible. Our service includes a thorough analysis of data
                    loss causes and implementation of strategies to prevent
                    future incidents. With KOIKOM, you gain peace of mind
                    knowing that your valuable data is in capable hands and that
                    we're committed to its recovery and ongoing protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
