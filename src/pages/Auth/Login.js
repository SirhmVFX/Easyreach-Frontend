import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useIsMount } from "../../hooks/useIsMount";
import "../../Easy.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Regicon from "../../images/Regicon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const isMount = useIsMount();
  const signInInfoState = useSelector((state) => state.signInInfo);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.signInInfo.userInfo);

  useEffect(() => {
    if (userDetails) {
      navigate("/");
    }
  }, [navigate, userDetails]);

  const errorExists = (error) => {
    return toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const success = (message) => {
    return toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      errorExists("Kindly fill all fields!");
    } else {
      dispatch(signIn(email, password));
    }
  };
  
  useEffect(() => {
    console.log("useEffect triggered");
    if (!isMount) {
      if (signInInfoState.error) {
        errorExists(signInInfoState.error);
      } else if (signInInfoState.userInfo) {
        success("Sign In Successful");
        navigate("/");
      }
    }
  }, [signInInfoState, navigate, isMount]);  
  return (
    <>{" "}
      <Header />

      <main>
        <section className="log_in">
          <div className="login_img">
            <figure>
              <img src={Regicon} alt="" />
            </figure>
          </div>

          <div>
            <form className="login-form">
              <h3>Log in to Exclusive</h3>
              <p className="margin-bottom">Enter your details below</p>

              <div className="form-fields">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Valid email required"}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>

              <div className="btn-sect">
                <button
                  className="button1"
                  onClick={(e) => handleClick(e)}
                  disabled={signInInfoState?.loading}
                >
                  {signInInfoState?.loading ? "Hold On..." : "Log In"}
                </button>
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
