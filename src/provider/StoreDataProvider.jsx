import { StoreDataContext } from "../context";
import { useStoreApi } from "../hooks";

const StoreDataProvider = ({ Children }) => {
  const { storeData, error, loading } = useStoreApi();
  return (
    <StoreDataContext.Provider value={{ storeData, error, loading }}>
      {Children}
    </StoreDataContext.Provider>
  );
};

export default StoreDataProvider;
