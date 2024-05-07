import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../../organisms/RecipeCard/RecipeCard";
import Loader from "../../atoms/Loader/Loader";
import { Recipe } from "../../utils/types/types";
import "./searched-page.css";

const SearchedPage = () => {
  const [searched, setSearched] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();

  const getSearched = async (name: string | undefined) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${name}&number=9`
      );
      setSearched(result.data.results);
    } catch (error) {
      window.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="searched-container">
      {loading ? (
        <Loader />
      ) : (
        searched.map((item) => <RecipeCard data={item} />)
      )}
    </div>
  );
};

export default SearchedPage;
