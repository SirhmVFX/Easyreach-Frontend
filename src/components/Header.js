import React from "react";
import '../Easy.css';
import "font-awesome/css/font-awesome.min.css";

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
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">About</a>
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
                        <a href="">
                            <i className="fa color1 fa-heart"></i>
                        </a>
                        <a href="">
                            <i className="fa color1 fa-shopping-cart" aria-hidden="true"></i>
                        </a>

                        <div className="profile-button">
                            <a href="">
                                <i className="fa color1 fa-user" aria-hidden="true"></i>
                            </a>

                            <div className="account-opt">
                                <div className="opt">
                                    <a href="">
                                        <i className="fa color1 fa-user" aria-hidden="true"></i>Manage
                                        My account
                                    </a>
                                </div>

                                <div className="opt">
                                    <a href="">
                                        <i className="fa color1 fa-user" aria-hidden="true"></i>My
                                        Order
                                    </a>
                                </div>

                                <div className="opt">
                                    <a href="">
                                        <i className="fa color1 fa-user" aria-hidden="true"></i>My
                                        Cancellations
                                    </a>
                                </div>

                                <div className="opt">
                                    <a href="">
                                        <i className="fa color1 fa-user" aria-hidden="true"></i>My
                                        Reviews
                                    </a>
                                </div>

                                <div className="opt">
                                    <a href="">
                                        <i className="fa color1 fa-user" aria-hidden="true"></i>Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;