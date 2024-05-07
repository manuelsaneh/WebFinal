/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./recipe-card.css";
import { Recipe } from "../../utils/types/types";
import { memo } from "react";

interface RecipeCardProps {
  data: Recipe;
}

const RecipeCard = ({ data }: RecipeCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      key={data.id}
      className="recipe-container"
    >
      <div className="recipe-card">
        <Link to={"/recipe/" + data.id} className="recipe-link">
          <img src={data.image} alt="" />
          <h4>{data.title}</h4>
        </Link>
      </div>
    </motion.div>
  );
};

export default memo(RecipeCard);
