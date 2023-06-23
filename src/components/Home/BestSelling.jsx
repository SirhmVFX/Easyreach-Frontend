import "../../Easy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import LightNorth from "../../images/LightNorth.png";
import LightGucci from "../../images/LightGucci.png";
import gammaxx from "../../images/gammaxx.png";
import sam from "../../images/sam.png";
import React from "react";

const BestSelling = () => {
  return (
    <section className="container">
      <div className="ctg">
        <p>This Month</p>
        <h3>Best Selling Products</h3>
      </div>

      <div>
        <button className="button1">View all products</button>
      </div>

      <div className="prd-list">
        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={LightNorth} alt="" />
          </div>

          <div className="prd-details">
            <p>HAVIT HV-G92 Gamepad</p>
            <div className="pricing">
              <p className="color1">$120</p>
              <p>$160</p>
            </div>

            <div className="actions">
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
          </div>
          <div className="tocart">
            <button className="button4 mg-tp">Add to cart</button>
          </div>
        </div>

        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={LightGucci} alt="" />
          </div>

          <div className="prd-details">
            <p>AK-900 Wired Keyboard</p>
            <div className="pricing">
              <p className="color1">$120</p>
              <p>$160</p>
            </div>

            <div className="actions">
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
          </div>
          <div className="tocart">
            <button className="button4 mg-tp">Add to cart</button>
          </div>
        </div>

        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={gammaxx} alt="" />
          </div>
          <div className="prd-details">
            <p>IPS LCD Gaming Monitor</p>
            <div className="pricing">
              <p className="color1">$120</p>
              <p>$160</p>
            </div>

            <div className="actions">
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
          </div>

          <div className="tocart">
            <button className="button4 mg-tp">Add to cart</button>
          </div>
        </div>

        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={sam} alt="" />
          </div>

          <div className="prd-details">
            <p>S-Series Comfort Chair</p>
            <div className="pricing">
              <p className="color1">$120</p>
              <p>$160</p>
            </div>

            <div className="actions">
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
          </div>
          <div className="tocart">
            <button className="button4 mg-tp">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
