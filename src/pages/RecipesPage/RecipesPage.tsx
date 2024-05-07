import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import InstructionsCard from "../../organisms/InstructionsCard/InstructionsCard";
import IngredientsCard from "../../organisms/IngredientsCard/IngredientsCard";
import AboutRecipe from "../../organisms/AboutRecipe/AboutRecipe";
import Loader from "../../atoms/Loader/Loader";
import { Info } from "../../utils/types/types";
import "./recipes-page.css";

const RecipesPage = () => {
  const [details, setDetails] = useState<Info | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();

  const getDetails = async (name: string | undefined) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.API_KEY}`
      );
      setDetails(response.data as Info);
    } catch (error) {
      window.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails(params.name);
  }, [params.name]);

  return (
    <div className="details-page">
      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <>
          {details && <AboutRecipe data={details} />}

          <motion.div
            className="info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {details && (
              <>
                <InstructionsCard data={details} />
                <IngredientsCard data={details} />
              </>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default RecipesPage;
