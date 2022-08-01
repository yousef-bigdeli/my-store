import { GoMail } from "react-icons/go";
import { AiOutlineLock } from "react-icons/ai";
import styles from "./Login.module.scss";

const RegisterForm = ({ handleFormState }) => {
  const handleSignUp = (e) => {
    e.preventDefault();
    handleFormState("login");
  };

  return (
    <>
      <form
        onSubmit={handleSignUp}
        className={styles.loginForm}
        autoComplete="off"
      >
        <h2>Sign Up</h2>
        <div className="flex-1 pt-5">
          <div className={styles.inputControl}>
            <label htmlFor="name">
              <GoMail />
            </label>
            <input
              type="text"
              id="name"
              className={styles.formInput}
              placeholder="Name"
            />
          </div>
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
        </div>
        <div>
          <button
            type="submit"
            className={`${styles.formButton} bg-primaryColor text-white`}
          >
            Login
          </button>
          <p className="mt-3 text-12">
            Do you have an account?{" "}
            <button
              className="text-primaryColor"
              onClick={() => handleFormState("login")}
            >
              Login here
            </button>{" "}
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
