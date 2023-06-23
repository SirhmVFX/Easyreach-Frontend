import React from "react";
import "../../Easy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faLaptop,
  faClock,
  faCamera,
  faHeadphones,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <section className="container">
      <div className="ctg">
        <p>This Month</p>
        <h3>Browse by Categories</h3>
      </div>

      <div className="container">
        <div className="categories-container">
          <button className="button2 catt">
            <FontAwesomeIcon icon={faMobile} />
            <p>Phones</p>
          </button>

          <button className="button2 catt catt">
            <FontAwesomeIcon icon={faLaptop} />
            <p>Computer</p>
          </button>

          <button className="button2 catt">
            <FontAwesomeIcon icon={faClock} />
            <p>Wrist watch</p>
          </button>

          <button className="button2 catt">
            <FontAwesomeIcon icon={faCamera} />
            <p>Camera</p>
          </button>

          <button className="button3">
            <FontAwesomeIcon icon={faHeadphones} />
            <p>Headphones</p>
          </button>

          <button className="button2 catt">
            <FontAwesomeIcon icon={faGamepad} />
            <p>Gamepad</p>
          </button>

          <button className="button2 catt">
            <FontAwesomeIcon icon={faMobile} />
            <p>Phones</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
