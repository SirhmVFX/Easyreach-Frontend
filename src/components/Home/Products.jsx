import React from 'react';
import "../../Easy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Myprod from "../../images/Myprod.png";
import eosprod from "../../images/eosprod.png";
import ideapad from "../../images/ideapad.png";
import curology from "../../images/curology.png";
import Mercedes from "../../images/Mercedes.png";
import Copasense from "../../images/Copasense.png";
import Gpprod from "../../images/Gpprod.png";
import reverse from "../../images/reverse.png";

const ProductList = () => {
  return (
    <section className="container">
      <div className="prd-list">
        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={Myprod} alt="" />
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
            <img className="prd-img" src={eosprod} alt="" />
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
            <img className="prd-img" src={ideapad} alt="" />
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
            <img className="prd-img" src={curology} alt="" />
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

        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={Mercedes} alt="" />
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

        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={Copasense} alt="" />
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

        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={Gpprod} alt="" />
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

        <div className="product">
          <div className="discout-tag">
            <p>-40%</p>
          </div>

          <div className="ty">
            <img className="prd-img" src={reverse} alt="" />
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

export default ProductList;
