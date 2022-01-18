import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { clearErrors, login, register } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const LoginSignUp = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  let a = [
    "https://cdn.pixabay.com/photo/2015/09/29/00/29/devil-963136__340.png",
    "https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300583__340.png",
    "https://cdn.pixabay.com/photo/2016/04/01/10/04/amusing-1299757__340.png",
    "https://cdn.pixabay.com/photo/2017/08/14/08/39/emoji-2639736__340.png",
    "https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330__340.png",
    "https://cdn.pixabay.com/photo/2017/08/14/08/39/emoji-2639738__340.png",
    "https://cdn.pixabay.com/photo/2020/06/04/12/55/emoji-5258611__340.png",
    "https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635458__340.png",
    "https://cdn.pixabay.com/photo/2020/06/04/12/56/emoji-5258627__340.png",
    "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png",
    "https://cdn.pixabay.com/photo/2020/08/14/09/12/penguin-5487301__340.png",
    "https://cdn.pixabay.com/photo/2021/02/04/12/03/superhero-5981125__340.png",
    "https://cdn.pixabay.com/photo/2020/08/14/17/22/mask-5488606__340.png",
    "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833__340.png",
    "https://cdn.pixabay.com/photo/2016/03/31/20/11/avatar-1295575__340.png",
    "https://cdn.pixabay.com/photo/2020/06/04/12/57/emoji-5258643__340.png",
    "https://cdn.pixabay.com/photo/2021/01/27/09/24/woman-5954353__340.png",
    "https://cdn.pixabay.com/photo/2021/01/04/13/30/woman-5887569__340.png",
    "https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635452__340.png",
    "https://cdn.pixabay.com/photo/2018/08/04/10/23/man-3583424__340.jpg",
    "https://cdn.pixabay.com/photo/2021/02/01/10/06/woman-5970020__340.jpg",
    "https://cdn.pixabay.com/photo/2013/07/12/16/34/spooky-151177__340.png",
    "https://cdn.pixabay.com/photo/2016/04/01/10/04/amusing-1299756__340.png",
    "https://cdn.pixabay.com/photo/2016/03/31/20/31/avatar-1295831__340.png",
    "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554__340.png",
  ];

  let ran = Math.floor(Math.random() * a.length);

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  let imge = a[ran] ? a[ran] : "/Profile.png";

  const [avatar, setAvatar] = useState(imge);
  const [avatarPreview, setAvatarPreview] = useState(imge);

  const changeImage = () => {
    let ran2 = Math.floor(Math.random() * a.length);
    setAvatar(a[ran2]);
    setAvatarPreview(a[ran2]);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <MetaData title="LOGIN/REGISTER -Anshul's_Shop" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>

              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>

                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>

              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div id="registerImage">
                  <h4>We have chosen an avatar for you :</h4>
                  <img src={avatarPreview} alt="Avatar Preview" />

                  <button onClick={changeImage}>Click to change</button>
                </div>

                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;
