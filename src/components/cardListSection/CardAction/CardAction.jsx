import Search_Cart from "./Search_Cart";
import Sort_Filter from "./Sort_Filter";

export default function CardAction() {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <Sort_Filter />
        <Search_Cart />
      </div>
    </div>
  );
}
