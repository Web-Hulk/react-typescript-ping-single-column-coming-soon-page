import { useEffect, useState } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import illustrationDashboard from "../../assets/illustration-dashboard.png";
import pingLogo from "../../assets/logo.svg";
import { Snackbar } from "../../components/Snackbar/Snackbar";
import "./Home.scss";

function Home() {
  const [inputData, setInputData] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSnackbarDisplayed, setIsSnackbarDisplayed] =
    useState<boolean>(false);

  // Set timeout to hide Snackbar after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSnackbarDisplayed(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSnackbarDisplayed]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleButton = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputData === "") {
      setErrorMessage("Whoops! It looks like you forgot to add your email");
      setIsSnackbarDisplayed(false);
    } else if (!emailRegex.test(inputData)) {
      setErrorMessage("Please provide a valid email address");
      setIsSnackbarDisplayed(false);
    } else {
      setErrorMessage("");
      setInputData("");
      setIsSnackbarDisplayed(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleButton();
  };

  return (
    <div className="container">
      {isSnackbarDisplayed ? (
        <Snackbar
          text="Success! The form has been submitted."
          vertical="top"
          horizontal="right"
        />
      ) : null}

      <div className="logo">
        <img src={pingLogo} alt="Ping logo" />
      </div>

      <p className="paragraph info">
        <span className="gray-text">We are launching</span>{" "}
        <strong>soon!</strong>
      </p>

      <p className="paragraph">Subscribe and get notified</p>

      <form className="form" onSubmit={handleFormSubmit} noValidate>
        <div className="input-container">
          <input
            type="text"
            placeholder="Your email address.."
            className={`form-input ${errorMessage ? "error" : ""}`}
            onChange={handleInput}
            value={inputData}
            required
          />

          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
        </div>

        <button type="submit" className="form-button">
          Notify Me
        </button>
      </form>

      <div className="image-container">
        <img
          src={illustrationDashboard}
          alt="Illustration dashboard"
          className="image"
        />
      </div>

      <div className="social-icons-container">
        <div className="icon-box">
          <IoLogoFacebook className="icon" />
        </div>
        <div className="icon-box">
          <IoLogoTwitter className="icon" />
        </div>
        <div className="icon-box">
          <IoLogoInstagram className="icon" />
        </div>
      </div>

      <p className="paragraph gray-text">
        © Copyright Ping. All rights reserved.
      </p>
    </div>
  );
}

export default Home;
