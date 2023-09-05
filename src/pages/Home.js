import React from "react";
import ServiceCompany from "../components/ServiceCompany/servicecompany";
import Aboutcompany from "../components/AboutCompany/aboutcompany";
import Ourservice from "../components/OurService/ourservice";
import Statistic from "../components/Statistic/statistic";
import Chooseus from "../components/ChooseUs/chooseus";
import TrustUs from "../components/TrustUs/trustus";
import Testimonial from "../components/TestiMonial/testimonial";
import Transform from "../components/Transform/transform";
import Customers from "../components/OurCustomers/customers";

export default function Home() {
  return (
    <>
      <ServiceCompany />
      <Aboutcompany />
      <Ourservice />
      <Statistic />
      <Chooseus />
      <TrustUs />
      <Testimonial />
      <Transform />
      <Customers />
    </>
  );
}
