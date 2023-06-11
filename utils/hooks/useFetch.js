import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";
const useFetchRecipes = (endpoint) => {
  const [recipes, setRecipes] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    url: `https://yummly2.p.rapidapi.com/${endpoint}`,
    params: { limit: "24", start: "0" },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setRecipes(response.data.feed);
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { recipes, errorMsg, isLoading };
};

export default useFetchRecipes;
