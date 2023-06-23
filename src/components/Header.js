import React from 'react';
import '../Easy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
      <header>
        <div className="firstheader">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p>
            <strong>ShopNow</strong>
          </p>
        </div>
  
        <div className="">
          <nav>
            <p>
              <a href="/">EasyReach</a>
            </p>
  
            <ul className="nav_menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/login">Sign In</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
  
            <div className="nfg">
              <input
                className="sinput"
                type="text"
                placeholder="What are you looking for"
              />
              <a href="/">
                <FontAwesomeIcon icon={faHeart} className="color1" />
              </a>
              <a href="/">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="color1"
                  aria-hidden="true"
                />
              </a>
  
              <div className="profile-button">
                <a href="/">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="color1"
                    aria-hidden="true"
                  />
                </a>
  
                <div className="account-opt">
                  <div className="opt">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="color1"
                        aria-hidden="true"
                      />
                      Manage My account
                    </a>
                  </div>
  
                  <div className="opt">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="color1"
                        aria-hidden="true"
                      />
                      My Order
                    </a>
                  </div>
  
                  <div className="opt">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="color1"
                        aria-hidden="true"
                      />
                      My Cancellations
                    </a>
                  </div>
  
                  <div className="opt">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="color1"
                        aria-hidden="true"
                      />
                      My Reviews
                    </a>
                  </div>
  
                  <div className="opt">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="color1"
                        aria-hidden="true"
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  