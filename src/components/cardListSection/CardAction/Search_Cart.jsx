import { useContext } from "react";
import { TaskActionContext } from "../../../context";
import { SortCart, SortSearch } from "../../SVG/svg";

export default function Search_Cart() {
  const { handleSearch } = useContext(TaskActionContext);

  return (
    <div className="flex gap-2 items-center">
      <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
        <SortSearch />
        <input
          className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
          type="search"
          placeholder="Find anything..."
          aria-label="Search components"
          id="headlessui-combobox-input-:r5n:"
          role="combobox"
          aria-expanded="false"
          aria-autocomplete="list"
          onChange={handleSearch}
        />
      </div>

      <div className="flow-root">
        <a href="#" className="group -m-2 flex items-center p-2">
          <SortCart />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </a>
      </div>
    </div>
  );
}
