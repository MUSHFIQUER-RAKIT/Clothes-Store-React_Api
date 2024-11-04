import CardAction from "./CardAction/CardAction";
import CardLists from "./CardLists";

import { useContext } from "react";
import { StoreDataContext } from "../../context";

export default function CardBoard() {
  const { storeData, loading } = useContext(StoreDataContext);
  return (
    <>
      {loading.state ? (
        <p>loading.message</p>
      ) : (
        <>
          <CardAction />
          <CardLists />
        </>
      )}
    </>
  );
}
