import { useContext } from "react";

import { TaskActionContext } from "../../context";
import { SortCart } from "../SVG/svg";

export default function CardLists() {
  const { displayData, loading, addToCart, removeFromCart, isProductInCart } =
    useContext(TaskActionContext);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading.state
              ? displayData.map(data => (
                  <div
                    key={data.id}
                    className="bg-white p-4 rounded-lg shadow animate-pulse"
                  >
                    <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-10 bg-gray-300 rounded"></div>
                  </div>
                ))
              : displayData.map(data => (
                  <div key={data.id} className="relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="h-full w-full object-cover object-top lg:h-full lg:w-full  bg-gray-100"
                      />
                    </div>
                    <div className="mt-4 px-3 pb-4">
                      <div>
                        <h3 className="text-sm text-gray-700  h-14 overflow-hidden">
                          {data.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {data.category}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {data.price} $
                      </p>
                    </div>

                    <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 hover:ring-slate-700/20 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                      <button
                        className="flex px-3 py-2 h-full w-full justify-center place-content-center"
                        onClick={() =>
                          isProductInCart(data.id)
                            ? removeFromCart(data.id)
                            : addToCart(data)
                        }
                      >
                        <SortCart />
                        {isProductInCart(data.id)
                          ? "Remove from Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
