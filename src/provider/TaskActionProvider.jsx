import { useState } from "react";
import { TaskActionContext } from "../context";
import { useStoreApi } from "../hooks";

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

  return (
    <TaskActionContext.Provider
      value={{
        sortedData,
        loading,
        setIsAscending,
        selectedCategory,
        changeCategory,
      }}
    >
      {children}
    </TaskActionContext.Provider>
  );
};
export default TaskActionProvider;
