import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useViewport } from "../../utils/customHooks/Viewport";
import { Recipe } from "../../utils/types/types";
import Slider from "../../molecules/Slider/Slider";
import "./popular.css";

const PopularSlider = () => {
  const [popular, setPopular] = useState<Recipe[]>([]);
  const { width } = useViewport();

  const getPopular = useMemo(() => {
    return async () => {
      const check = localStorage.getItem("popular");
      try {
        if (check) {
          setPopular(JSON.parse(check));
        } else {
          const result = await axios.get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=9`
          );
          setPopular(result.data.recipes);
          localStorage.setItem("popular", JSON.stringify(result.data.recipes));
        }
      } catch (error) {
        alert("Something went wrong. Try again.");
      }
    };
  }, []);

  useEffect(() => {
    getPopular();
  }, [getPopular]);

  return (
    <motion.div
      className="slider"
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
      <Slider data={popular} />
    </motion.div>
  );
};

export default PopularSlider;
