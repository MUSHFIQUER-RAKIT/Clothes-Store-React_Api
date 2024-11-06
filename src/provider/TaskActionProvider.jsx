import { useState } from "react";
import { TaskActionContext } from "../context";
import { useDebounce, useStoreApi } from "../hooks";

const TaskActionProvider = ({ children }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { storeData, loading } = useStoreApi(selectedCategory);

  const changeCategory = category => {
    setSelectedCategory(category);
  };

  const sortedData = [...storeData].sort((a, b) => {
    return isAscending ? a.price - b.price : b.price - a.price;
  });

  // Search
  const [searchTerm, setSearchTerm] = useState("");
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
      }}
    >
      {children}
    </TaskActionContext.Provider>
  );
};
export default TaskActionProvider;
