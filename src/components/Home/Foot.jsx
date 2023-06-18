import React from "react";
import "../../Easy.css";
import delivery from "../../images/delivery.png";
import customer from "../../images/customer.png";
import secure from "../../images/secure.png";

const Foot = () => {
  return (
    <section className="container">
      <div className="last">
        <div className="extt">
          <img className="iddd" src={delivery} alt="" />
          <div>
            <h3>FREE AND FAST delivery</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>

        <div className="extt">
          <img className="iddd" src={customer} alt="" />
          <div>
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>

        <div className="extt">
          <img className="iddd" src={secure} alt="" />
          <div>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foot;
