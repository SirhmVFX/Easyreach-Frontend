import React from "react";
import "../../Easy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Gprod from "../../images/Gprod.png";
import ss from "../../images/ss.png";
import Akprod from "../../images/Akprod.png";
import Gprod2 from "../../images/Gprod2.png";

const FlashSales = () => {
  return (
    <section className="container">
      <div className="ctg">
        <p>Today’s</p>
        <h3>Flash Sales</h3>
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
            <img className="prd-img" src={Gprod} alt="" />
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
            <img className="prd-img" src={Akprod} alt="" />
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
            <img className="prd-img" src={Gprod2} alt="" />
          </div>

          <div className="prd-details">
            <p>IPS LCD Gaming Monitor</p>
            <div className="pricing">
              <p className="color1">$120</p>
              <p>$160</p>
            </div>

            <div className="actions">
              <div>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>

              <div>
                <i className="fa fa-heart" aria-hidden="true"></i>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
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
            <img className="prd-img" src={ss} alt="" />
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

export default FlashSales;
