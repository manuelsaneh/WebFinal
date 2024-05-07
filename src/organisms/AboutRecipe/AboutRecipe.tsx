import { motion } from "framer-motion";
import { useViewport } from "../../utils/customHooks/Viewport";
import { Info } from "../../utils/types/types";
import "./about-recipe.css";

interface AboutRecipeProps {
  data: Info;
}

const AboutRecipe = ({ data }: AboutRecipeProps) => {
  const { width } = useViewport();
  return (
    <div className="about">
      <motion.div
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
        <h2 className="recipe-title">{data.title}</h2>
        <div className="image-container">
          <img src={data.image} alt="recipe-image" />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="title">About this recipe</h2>
        <p
          className="summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        ></p>
      </motion.div>
    </div>
  );
};

export default AboutRecipe;
