import React from "react";
import '../Easy.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div className="ft1">
            <p>Exclusive</p>

            <p>Subscribe</p>

            <p>Get 10% off your first order</p>

            <input
              type="text"
              name="Enter Email"
              id=""
              placeholder="Enter Email address"
            />
          </div>

          <div className="ft1">
            <p>Support</p>

            <p>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </p>

            <p>exclusive@gmail.com</p>

            <p>+88015-88888-9999</p>
          </div>

          <div className="ft1">
            <p>Account</p>

            <ul className="foot-nav">
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Login/Register</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
          </div>

          <div className="ft1">
            <p>Quick Link</p>

            <ul className="foot-nav">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          <div className="ft1">
            <p>Download App</p>

            <p>Save $3 with App New User Only</p>

            <div className="src-code">
              <img className="gogl" src="/Qrcode 1src.png" alt="" />

              <div>
                <img
                  className="gog"
                  src="/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logosrc.png"
                  alt=""
                />
                <img
                  className="gog"
                  src="/download-appstoresrc.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
