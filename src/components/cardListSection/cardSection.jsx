import CardBoard from "./CardBoard";
import CardHeading from "./CardHeading";

import { StoreDataProvider } from "../../provider";

export default function CardSction() {
  return (
    <StoreDataProvider>
      <div>
        <div className="pt-16 sm:pt-24 lg:pt-40">
          <CardHeading />
          <CardBoard />
        </div>
      </div>
    </StoreDataProvider>
  );
}
