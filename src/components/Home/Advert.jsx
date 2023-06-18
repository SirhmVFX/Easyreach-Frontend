import React from 'react';
import "../../Easy.css";
import JBL from "../../images/JBL.png";

const Advert = () => {
  return (
    <>
      <section className="container">
        <div className="feature-img">
          <div>
            <p className="color1">Categories</p>
            <h2 className="mg-tp">Enhance Your Music Play Experience</h2>
            <button className="button1">Buy Now</button>
          </div>
          <div>
            <figure className="iphoneimg">
              <img src={JBL} alt="" />
            </figure>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="ctg">
          <p>Our Products</p>
          <h3>Explore Our Products</h3>
        </div>
        <div>
          <button className="button1">View all products</button>
        </div>
      </section>
    </>
  );
};

export default Advert;
