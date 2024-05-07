import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LuBeef } from "react-icons/lu";
import { motion } from "framer-motion";
import { useViewport } from "../../utils/customHooks/Viewport";
import "./popular-categories.css";

const PopularCategories = () => {
  const { width } = useViewport();
  return (
    <motion.div
      className="list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1 }}
      variants={
        width <= 550
          ? {
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }
          : {
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }
      }
    >
      <Link to={"/cuisine/Italian"} className="categories-link">
        <FaPizzaSlice className="categories-icon" />
        <h4 className="categories-title">Italian</h4>
      </Link>
      <Link to={"/cuisine/American"} className="categories-link">
        <FaHamburger className="categories-icon" />
        <h4 className="categories-title">American</h4>
      </Link>
      <Link to={"/cuisine/Thai"} className="categories-link">
        <GiNoodles className="categories-icon" />
        <h4 className="categories-title">Thai</h4>
      </Link>
      <Link to={"/cuisine/Japanese"} className="categories-link">
        <GiChopsticks className="categories-icon" />
        <h4 className="categories-title">Japanese</h4>
      </Link>
      <Link to={"/cuisine/Mediterranean"} className="categories-link">
        <LuBeef className="categories-icon" />
        <h4 className="categories-title">Mediterranean</h4>
      </Link>
    </motion.div>
  );
};

export default PopularCategories;
