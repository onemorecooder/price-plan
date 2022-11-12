import Card from "../../components/card/Card";
import "./pricingPage.styles.css";
import { pricingPageConfig } from "./pricingPages.constants";
import { useState } from "react";

const PricePage = () => {
  
  return (
    <div className="plans">
      {pricingPageConfig.map((cardProps) => (
        <Card key={cardProps.planName} {...cardProps} />
      ))}
    </div>
  );
};

export default PricePage;
