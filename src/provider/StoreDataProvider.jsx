import { StoreDataContext } from "../context";
import { useStoreApi } from "../hooks";

const StoreDataProvider = ({ children }) => {
  const { error, loading } = useStoreApi();

  return (
    <StoreDataContext.Provider value={{ error, loading }}>
      {children}
    </StoreDataContext.Provider>
  );
};

export default StoreDataProvider;
