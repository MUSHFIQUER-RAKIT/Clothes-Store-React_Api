import { useState } from "react";
import { TaskActionContext } from "../context";
import { useStoreApi } from "../hooks";

const TaskActionProvider = ({ children }) => {
  const { storeData } = useStoreApi();
  const [isAscending, setIsAscending] = useState(true);

  const sortedData = [...storeData].sort((a, b) => {
    return isAscending ? a.price - b.price : b.price - a.price;
  });

  return (
    <TaskActionContext.Provider value={{ sortedData, setIsAscending }}>
      {children}
    </TaskActionContext.Provider>
  );
};
export default TaskActionProvider;
