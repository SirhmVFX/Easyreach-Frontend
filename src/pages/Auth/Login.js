import React from "react";
import '../../Easy.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Regicon from "../../images/Regicon.png";

const Login = () => {
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
              <h3>Log in to Exclusive</h3>
              <p className="margin-bottom">Enter your details below</p>

              <div className="form-fields">
                <input type="text" placeholder="Enter Username" />
                <input type="password" placeholder="Enter Password" />
              </div>

              <div className="btn-sect">
                <button className="button1">Log In</button>
                <p className="color1">Forget password?</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Login;
