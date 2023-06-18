import React from "react";
import "../../Easy.css";
import woman from "../../images/woman.png";
import ps from "../../images/ps.png";
import amazon from "../../images/amazon.png";
import cprod from "../../images/cprod.png";
// eslint-disable-next-line

const NewArrivals = () => {
  return (
    <>
      <section className="container">
        <div className="ctg">
          <p>Featured</p>
          <h3>New Arrivals</h3>
        </div>
      </section>
      <section className="container">
        <div className="ft-section">
          <div className="ft-prd">
            <img className="sp" src={ps} alt="" />
            <div className="ft-det">
              <h4>PlayStation 5</h4>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="/">Shop Now</a>
            </div>
          </div>

          <div className="ft-prd">
            <img className="sp" src={woman} alt="" />
            <div className="ft-det">
              <h4>PlayStation 5</h4>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="/">Shop Now</a>
            </div>
          </div>

          <div className="ft-prd">
            <img className="sp" src={amazon} alt="" />
            <div className="ft-det">
              <h4>PlayStation 5</h4>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="/">Shop Now</a>
            </div>
          </div>

          <div className="ft-prd">
            <img className="sp" src={cprod} alt="" />
            <div className="ft-det">
              <h4>PlayStation 5</h4>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="/">Shop Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
