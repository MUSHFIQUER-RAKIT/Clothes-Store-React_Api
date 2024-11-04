import { useEffect, useState } from "react";

const useStoreApi = () => {
  const [storeData, setStoreData] = useState([
    {
      id: 1,
      title: "...",
      price: "...",
      category: "...",
      description: ".DDDDDD..",
      image: "...",
    },
  ]);

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

      const response = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => console.log(json));

      if (!response.ok) {
        const errorMessage = `Fetching Store Data From FakeStore Api Failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setStoreData([
        {
          id: data.id,
          title: data.title,
          price: data.price,
          category: data.category,
          description: data.description,
          image: data.image,
        },
      ]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    fetchStoreData();
  }, []);

  return { storeData, error, loading };
};

export default useStoreApi;
