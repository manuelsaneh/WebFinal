import HomeImage from "../../assets/images/HomePhoto.jpg";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <div className="header">
      <img src={HomeImage} alt="home-image" />

      <div className="text-container">
        <motion.h1
          className="heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="main">Satisfy & Delight</span>
          <span className="sub">
            Your Destination for Delicious Discoveries
          </span>
        </motion.h1>

        <a href="#categories" className="btn btn--white btn--animated">
          Discover our Recipes
        </a>
      </div>
    </div>
  );
};

export default Hero;
