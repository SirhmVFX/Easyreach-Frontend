import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useIsMount } from "../../hooks/useIsMount";
import '../../Easy.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Regicon from "../../images/Regicon.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const signUpInfoState = useSelector((state) => state.signUpInfo);
  const userDetails = useSelector((state) => state.signInInfo.userInfo);
  useEffect(() => {
    if (userDetails) {
      navigate("/overview");
    }
  }, [navigate, userDetails]);

  const dispatch = useDispatch();
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
  const isMount = useIsMount();

  useEffect(() => {
    if (!isMount) {
      if (signUpInfoState.error) {
        errorExists(signUpInfoState.error);
      }
    }
  }, [signUpInfoState.error, navigate, isMount]);
  useEffect(() => {
    // if (!isMount) {
    if (signUpInfoState.userInfo) {
      success("Sign Up Successful");
      navigate("/verify-signup");
    }
  }, [signUpInfoState.userInfo, navigate, isMount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || name || !password || !phone) {
      return toast.error("Kindly fill all fields!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (password.length < 8) {
        return toast.error("Passwords must have 8 or more characters!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(signup(username, email, name, password, phone));
      }
    }
  };
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
            <form className="login-form"
            onSubmit={(e) => handleSubmit(e)}
            >
              <h3>Create an account</h3>
              <p className="margin-bottom">Enter your details below</p>

              <div className="form-fields margin-bottom">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <div className="btn-sect">
                <button className="button1"
                disabled={signUpInfoState?.loading}
                >
                {signUpInfoState.loading ? "Hold On ..." : "Sign Up"}
                </button>
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
