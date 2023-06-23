import React from 'react';
import "../../Easy.css";
import Applegray from '../../images/Applegray.png';
import HeroendFrame from '../../images/HeroendFrame.png';

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div>
          <ul>
            <li><a href="/">Woman’s Fashion</a></li>
            <li><a href="/">Men’s Fashion</a></li>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Home & Lifestyle</a></li>
            <li><a href="/">Medicine</a></li>
            <li><a href="/">Sports & Outdoor</a></li>
            <li><a href="/">Baby’s & Toys</a></li>
            <li><a href="/">Groceries & Pets</a></li>
            <li><a href="/">Health & Beauty</a></li>
          </ul>
        </div>

        <div className="feature-img">
          <div className="freeoo">
            <div className="feat1">
              <figure className="applelogo">
                <img src={Applegray} alt="" />
              </figure>

              <p>iPhone 14 Series</p>
            </div>

            <h2>Up to 10% off Voucher</h2>

            <p><a href="/">Shop Now</a></p>
          </div>

          <div>
            <figure className="iphoneimg">
              <img src={HeroendFrame} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
