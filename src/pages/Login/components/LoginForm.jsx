import { useNavigate } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { AiOutlineLock } from "react-icons/ai";
import styles from "./Login.module.scss";

const LoginForm = ({ handleFormState, handleLogin }) => {
  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={handleLogin} className={styles.loginForm} autoComplete="off">
        <h2>Login</h2>
        <div className="flex-1 pt-5">
          <div className={styles.inputControl}>
            <label htmlFor="email">
              <GoMail />
            </label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              placeholder="Email"
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="password">
              <AiOutlineLock />
            </label>
            <input
              type="password"
              id="password"
              className={styles.formInput}
              placeholder="Password"
            />
          </div>
          <div className="text-12">Forgot Password &gt;</div>
        </div>
        <div>
          <button
            type="submit"
            className={`${styles.formButton} bg-primaryColor text-white`}
          >
            Login
          </button>
          <p className="mt-3 text-12">
            Don't have an account?{" "}
            <button
              className="text-primaryColor"
              onClick={() => handleFormState("register")}
            >
              Sign up here
            </button>{" "}
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
