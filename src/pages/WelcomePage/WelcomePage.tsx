import { useEffect, useState } from "react";
import WelcomeNav from "../../organisms/WelcomeNav/WelcomeNav";
import Welcome from "../../assets/images/Welcome.jpg";
import SignupCard from "../../templates/SignupCard/SignupCard";
import LoginCard from "../../templates/LoginCard/LoginCard";
import "./WelcomePage.css";

const WelcomePage = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const togglePage = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("popular");
    localStorage.removeItem("vegetarian");
  }, []);

  return (
    <div className="welcome">
      <div className="welcome_img-container">
        <img src={Welcome} alt="WelcomePhoto" />
      </div>
      <div className="login-register">
        {toggle ? <LoginCard /> : <SignupCard />}
        <WelcomeNav togglePage={togglePage} toggle={toggle} />
      </div>
    </div>
  );
};

export default WelcomePage;
