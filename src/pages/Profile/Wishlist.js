import React from "react";
import '../../Easy.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Akprod from "../../images/Akprod.png";
import ss from "../../images/ss.png";
import Gprod from "../../images/Gprod.png";
import Gprod2 from "../../images/Gprod2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Wishlist = () => {
    return (
        <>
            <Header />

            <section className="container">
                <div>
                    <h3>Wishlist (4)</h3>
                </div>
            </section>

            <section className="container">
                <div className="prd-list">
                    {/* Product 1 */}
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

                    {/* Product 2 */}
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

                    {/* Product 3 */}
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

                    {/* Product 4 */}
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

            <section className="container">
                <div>
                    <h3>Related Products</h3>
                </div>
            </section>

            <section className="container">
                <div className="prd-list">
                    {/* Related Product 1 */}
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

                    {/* Related Product 2 */}
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

                    {/* Related Product 3 */}
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

                    {/* Related Product 4 */}
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

            <Footer />
        </>
    );
};

export default Wishlist;
