import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Login/RegisterForm";

// TODO: login and register

const LoginPage = () => {
  const [formState, setFormState] = useState("login");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    navigate(`${state.backUrl}`);
  };

  const handleFormState = (state) => {
    setFormState(state);
  };

  useEffect(() => {
    document.getElementById("root").style.display = "none";
    return () => (document.getElementById("root").style.display = "block");
  }, []);

  const element = (
    <div className="absolute w-full h-screen bg-loginBg top-0 z-50 left-0 flex flex-col justify-center items-center -mt-6">
      <h1>
        <Link to="/">
          <img
            src={logo}
            alt="my store"
            className="mx-auto mb-6"
            width="120px"
          />
        </Link>
      </h1>
      {formState === "login" ? (
        <LoginForm
          handleFormState={handleFormState}
          handleLogin={handleLogin}
        />
      ) : (
        <RegisterForm handleFormState={handleFormState} />
      )}
    </div>
  );

  return createPortal(element, document.getElementById("login-portal"));
};

export default LoginPage;
