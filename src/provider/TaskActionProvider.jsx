import { useState } from "react";
import { TaskActionContext } from "../context";
import { useDebounce, useStoreApi } from "../hooks";

const TaskActionProvider = ({ children }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { storeData, loading } = useStoreApi(selectedCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const changeCategory = category => {
    setSelectedCategory(category);
  };

  const sortedData = [...storeData].sort((a, b) => {
    return isAscending ? a.price - b.price : b.price - a.price;
  });

  // Search
  // debounced Search
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const doSearch = useDebounce(value => {
    setDebouncedSearchTerm(value);
  }, 700);

  const handleSearchChange = value => {
    setSearchTerm(value);
    doSearch(value);
  };

  // Search
  const filteredData = sortedData.filter(task =>
    debouncedSearchTerm
      ? task.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      : true
  );

  function handleSearch(e) {
    handleSearchChange(e.target.value);
  }

  // Final Data To Dispkay
  const displayData = filteredData.length > 0 ? filteredData : sortedData;

  // Cart Listsss
  const addToCart = product => {
    setCartItems(prevCart => [...prevCart, product]);
  };

  const removeFromCart = productId => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const isProductInCart = productId => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <TaskActionContext.Provider
      value={{
        sortedData,
        loading,
        setIsAscending,
        selectedCategory,
        changeCategory,
        displayData,
        handleSearch,
        cartItems,
        addToCart,
        removeFromCart,
        isProductInCart,
      }}
    >
      {children}
    </TaskActionContext.Provider>
  );
};
export default TaskActionProvider;
