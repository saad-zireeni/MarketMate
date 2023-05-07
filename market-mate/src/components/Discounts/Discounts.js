import axios from "axios";
import { useEffect, useState } from "react";

const Discounts = () => {

    const [discounts, setDiscounts] = useState([]);
    const [ten, setTen] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:3031/products")
          .then((res) => {
            setDiscounts(res.data);
            setTen(discounts.slice(0, 10));
          })
          .catch((error) => console.log(error));
      });

  return (
    <>
  <div class="flex flex-col bg-white m-auto p-auto">
    <h1 className="text-3xl font-bold text-gray-900 text-center my-5">
      Today's Discount Deals
    </h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
        {ten.map((d, i) => (
          <div className="w-64 h-96 bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2 mx-4">
            <img className="rounded-t-md w-full h-48 object-cover" src={d.image} alt="" width="250" height="250" />
            <div class="p-2 flex-1">
              <h5 className="mb-1 text-base font-semibold tracking-tight text-gray-900 dark:text-black">
                {d.name}
              </h5>
              <p className="mb-2 text-xs text-gray-700 dark:text-gray-400">
                {d.description}
              </p>
              <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                ${d.price}
              </p>
              <a
                href="#"
                className="inline-block px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</>
  );
};

export default Discounts;
