import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useViewport } from "../../utils/customHooks/Viewport";
import { Recipe } from "../../utils/types/types";
import "./vegetarian-slider.css";
import Slider from "../../molecules/Slider/Slider";

const VegetarianSlider = () => {
  const [vegetarian, setVegetarian] = useState<Recipe[]>([]);
  const { width } = useViewport();

  const getVegetarian = useMemo(() => {
    return async () => {
      const check = localStorage.getItem("vegetarian");
      try {
        if (check) {
          setVegetarian(JSON.parse(check));
        } else {
          const result = await axios.get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=9&tags=vegetarian`
          );
          setVegetarian(result.data.recipes);
          // this is only because of the limited requests from the api
          localStorage.setItem(
            "vegetarian",
            JSON.stringify(result.data.recipes)
          );
        }
      } catch (error) {
        alert("Something went wrong. Try again.");
      }
    };
  }, []);

  useEffect(() => {
    getVegetarian();
  }, [getVegetarian]);

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
      <Slider data={vegetarian} />
    </motion.div>
  );
};

export default VegetarianSlider;
