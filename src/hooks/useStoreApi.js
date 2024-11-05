import { useEffect, useState } from "react";

const useStoreApi = category => {
  const [storeData, setStoreData] = useState([]);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchStoreData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Store Data...",
      });
      let url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : `https://fakestoreapi.com/products`;

      const response = await fetch(url);

      if (!response.ok) {
        const errorMessage = `Fetching Store Data From FakeStore Api Failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setStoreData(data);
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
    let ignore = false;

    if (!ignore) {
      fetchStoreData();
    }
  }, [category]);

  return { storeData, error, loading };
};

export default useStoreApi;
