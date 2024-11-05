import CardAction from "./CardAction/CardAction";
import CardLists from "./CardLists";

// import { useContext } from "react";
// import { StoreDataContext } from "../../context";

export default function CardBoard() {
  // const { loading } = useContext(StoreDataContext);
  return (
    <>
      <CardAction />
      <CardLists />
    </>
  );
}
//  <>
//    {loading.state ? (
//      <p className="text-3xl text-center text-teal-600 p-9">{loading.message}</p>
//    ) : (
//      <>
//        <CardAction />
//        <CardLists />
//      </>
//    )}
//  </>;
