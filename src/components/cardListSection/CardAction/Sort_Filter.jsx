import { useContext, useState } from "react";
import { TaskActionContext } from "../../../context";
import { useStoreApi } from "../../../hooks";
import { SortArrow } from "../../SVG/svg";

export default function Sort_Filter() {
  const { setIsAscending } = useContext(TaskActionContext);
  const { storeData } = useStoreApi(
    "https://fakestoreapi.com/products/categories"
  );

  const [toggleDropdown, setToggleDropdown] = useState(null);

  const handleDropdown = Type => {
    setToggleDropdown(toggleDropdown === Type ? null : Type);
  };

  const Togglesort_L_Dropdown = () => {
    setToggleDropdown(null);
    setIsAscending(true);
  };
  const Togglesort_R_Dropdown = () => {
    setToggleDropdown(null);
    setIsAscending(false);
  };

  return (
    <div className="w-full">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => handleDropdown("sort")}
          >
            Sort
            <SortArrow />
          </button>
        </div>
        {toggleDropdown === "sort" && (
          <div
            className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <button
                className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                role="menuitem"
                tabIndex="-1"
                value="LowToHigh"
                onClick={Togglesort_L_Dropdown}
                id="menu-item-0"
              >
                Low to High
              </button>
              <button
                href=""
                className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                role="menuitem"
                tabIndex="-1"
                value="HighToLow"
                onClick={Togglesort_R_Dropdown}
                id="menu-item-0"
              >
                High to Low
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
            id="filter-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => handleDropdown("filter")}
          >
            Filter
            <SortArrow />
          </button>
        </div>
        {toggleDropdown === "filter" && (
          <div
            className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-button"
            tabIndex="-1"
            id="filter-dropdown"
          >
            <div className="py-1" role="none">
              {storeData.map(data => (
                <label
                  key={data}
                  className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    id="filter-option-1"
                  />
                  <span className="ml-2">{data}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
