import { StoreDataContext } from "../context";
import { useStoreApi } from "../hooks";

const StoreDataProvider = ({ children }) => {
  const { storeData, error, loading } = useStoreApi();
  return (
    <StoreDataContext.Provider value={{ storeData, error, loading }}>
      {children}
    </StoreDataContext.Provider>
  );
};

export default StoreDataProvider;
