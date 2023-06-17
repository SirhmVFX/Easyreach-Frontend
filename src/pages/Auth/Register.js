import React from "react";
import '../../Easy.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Regicon from "../../images/Regicon.png";

const Register = () => {
  return (
    <>
      <Header />

      <main>
        <section className="log_in">
          <div className="login_img">
            <figure>
              <img src={Regicon} alt="" />
            </figure>
          </div>

          <div>
            <form className="login-form" action="#" method="POST">
              <h3>Create an account</h3>
              <p className="margin-bottom">Enter your details below</p>

              <div className="form-fields margin-bottom">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
              </div>

              <div className="btn-sect">
                <button className="button1">Sign Up</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Register;
