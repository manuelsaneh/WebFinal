import "./WelcomeNav.css";

interface WelcomeNavProps {
  toggle: boolean;
  togglePage: () => void;
}

const WelcomeNav = ({ toggle, togglePage }: WelcomeNavProps) => {
  return (
    <nav className="welcome-nav">
      <p className="nav-text">
        {toggle ? "Don't Have an account?" : "Already have an account?"}
      </p>
      <button
        type="button"
        className="nav-btn btn--animated"
        onClick={togglePage}
      >
        {toggle ? "Signup" : "Login"}
      </button>
    </nav>
  );
};

export default WelcomeNav;
