import React from "react";
import "../assets/styles/privacy.css";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <>
      <div className="Terms">
        <h2>Privacy Policy</h2>
        <div className="container">
          <div className="boxAll">
            <h6>
              At KOIKOM, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines our practices concerning the collection, use, and
              safeguarding of your data. By using our services, you agree to the
              terms outlined in this policy.
            </h6>
            <div className="box">
              <span>1.</span>
              <span>Information We Collect</span>
              <p>
                We may collect personal information, including but not limited
                to your name, email address, phone number, and company details.
                This information is collected when you interact with us, such as
                when you visit our website, sign up for our services, or
                communicate with our team.
              </p>
            </div>
            <div className="box">
              <span>2.</span>
              <span>How We Use Your Information</span>
              <p>
                We use your personal information for various purposes, including
                to provide and improve our services, respond to your inquiries,
                send important updates or announcements, and personalize your
                experience with us. We may also use your data for internal
                analytics to enhance our offerings.
              </p>
            </div>
            <div className="box">
              <span>3.</span>
              <span>. Data Security</span>
              <p>
                We employ industry-standard security measures to protect your
                data from unauthorized access, disclosure, alteration, or
                destruction. We continuously monitor and update our security
                protocols to ensure the safety of your information.
              </p>
            </div>
            <div className="box">
              <span>4.</span>
              <span>Data Sharing</span>
              <p>
                We do not sell or share your personal information with third
                parties, except when necessary to provide our services or comply
                with legal obligations. In such cases, we ensure that strict
                data protection standards are maintained.
              </p>
            </div>
            <div className="box">
              <span>5.</span>
              <span>Cookies and Tracking</span>
              <p>
                We may use cookies and similar tracking technologies to enhance
                your browsing experience and analyze website traffic. You have
                the option to disable cookies in your browser settings, although
                this may affect your ability to access certain features of our
                website.
              </p>
            </div>
            <div className="box">
              <span>6.</span>
              <span>Your Rights</span>
              <p>
                You have the right to access, correct, or delete your personal
                information. You may also opt out of receiving promotional
                communications from us at any time.
              </p>
            </div>
            <div className="box">
              <span>7.</span>
              <span>Changes to This Policy</span>
              <p>
                We reserve the right to update this Privacy Policy to reflect
                changes in our practices or legal requirements. Any updates will
                be posted on our website, and your continued use of our services
                constitutes acceptance of these changes.
              </p>
            </div>
            <div className="box">
              <span>8.</span>
              <span>Contact Us</span>
              <p>
                If you have any questions or concerns regarding this Privacy
                Policy or the handling of your data, please contact us at
                 <Link to="/"> contact@koikom.com.</Link> <br /> By choosing KOIKOM, you entrust us with your
                data, and we take this responsibility seriously. We are
                dedicated to ensuring the privacy and security of your
                information while delivering exceptional services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
