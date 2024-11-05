import { useEffect, useState } from "react";

const useCategoryApi = () => {
  const [categoryData, setCategoryData] = useState();

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchCategoryData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Category Data...",
      });

      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      if (!response.ok) {
        const errorMessage = `Fetching Category Data From FakeStore Api Failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setCategoryData(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return { categoryData, error, loading };
};

export default useCategoryApi;
