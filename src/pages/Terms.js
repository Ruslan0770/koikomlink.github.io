import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/terms.css";

export default function Terms() {
  return (
    <>
      <div className="Terms">
        <h2>Terms & Conditions</h2>
        <div className="container">
          <div className="boxAll">
            <h6>
              Welcome to KOIKOM. Please carefully read the following terms and
              conditions that govern your use of our website and services. By
              accessing or using our website or services, you agree to comply
              with and be bound by these terms and conditions. If you do not
              agree to these terms, please do not use our website or services.
            </h6>
            <div className="box">
              <span>1.</span>
              <span>Use of the Service</span>
              <p>
                a. You must use our services and website in accordance with all
                applicable laws and regulations. <br /> b. You agree not to
                engage in any activity that could harm, disrupt, or interfere
                with our services, website, or the experience of other users.
              </p>
            </div>
            <div className="box">
              <span>2.</span>
              <span>Privacy and Data</span>
              <p>
                Our privacy policy outlines how we collect, use, and protect
                your personal information. By using our services, you consent to
                the practices described in our privacy policy.
              </p>
            </div>
            <div className="box">
              <span>3.</span>
              <span>User Accounts</span>
              <p>
                a. You may be required to create an account to access certain
                features of our services. You are responsible for maintaining
                the security of your account information and passwords. <br />{" "}
                b. You agree to provide accurate and up-to-date information when
                creating your account and using our services.
              </p>
            </div>
            <div className="box">
              <span>4.</span>
              <span>Content Ownership</span>
              <p>
                We retain ownership of all content on our website and services,
                including but not limited to text, graphics, logos, images, and
                software. You may not use our content without our express
                permission.
              </p>
            </div>
            <div className="box">
              <span>5.</span>
              <span>Intellectual Property</span>
              <p>
                KOIKOM and its logo are trademarks owned by us. You may not use
                these trademarks without our prior written consent.
              </p>
            </div>
            <div className="box">
              <span>6.</span>
              <span>Links to Third-Party Websites</span>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or practices of these websites,
                and your use of them is at your own risk.
              </p>
            </div>
            <div className="box">
              <span>7.</span>
              <span>Limitation of Liability</span>
              <p>
                a. We strive to provide accurate and reliable information, but
                we do not guarantee the accuracy, completeness, or reliability
                of our content. <br /> b. We are not liable for any direct,
                indirect, incidental, special, consequential, or punitive
                damages arising from your use of our website or services.
              </p>
            </div>
            <div className="box">
              <span>8.</span>
              <span className="spanedit">Termination</span>
              <p>
                We reserve the right to terminate or suspend your access to our
                website and services at our discretion and without notice.
              </p>
            </div>
            <div className="box">
              <span>9.</span>
              <span className="spanedit">Changes to Terms and Conditions</span>
              <p>
                We may update these terms and conditions at any time. Please
                review them periodically. Your continued use of our website or
                services constitutes acceptance of any changes.
              </p>
            </div>
            <div className="box">
              <span>10.</span>
              <span>Contact Us</span>
              <p>
                If you have questions or concerns about these terms and
                conditions, please contact us at{" "}
                <Link to="/"> contact@koikom.com.</Link> <br /> Thank you for
                choosing KOIKOM. We are committed to providing you with quality
                services, and we appreciate your adherence to these terms and
                conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
