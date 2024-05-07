import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../../organisms/RecipeCard/RecipeCard";
import { Recipe } from "../../utils/types/types";
import "./cuisine-page.css";
import Loader from "../../atoms/Loader/Loader";

const CuisinePage = () => {
  const [cuisine, setCuisine] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();

  const getCuisine = async (name: string | undefined) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&cuisine=${name}&number=9`
      );
      setCuisine(result.data.results);
    } catch (error) {
      window.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="cuisine-container">
      {loading ? <Loader /> : cuisine.map((item) => <RecipeCard data={item} />)}
    </div>
  );
};

export default CuisinePage;
