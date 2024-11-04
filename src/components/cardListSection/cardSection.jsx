import CardBoard from "./CardBoard";
import CardHeading from "./CardHeading";

export default function CardSction() {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <CardHeading />
        <CardBoard />
      </div>
    </div>
  );
}
