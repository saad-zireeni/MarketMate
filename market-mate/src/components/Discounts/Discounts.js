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
      function handleClick(name, price){
        console.log(name + " " + price);
      }

  return (
    <>
  <div class="flex flex-col bg-white m-auto p-auto">
    <h1 className="text-3xl font-bold text-gray-900 text-center my-5">
      Today's Discount Deals
    </h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
        {ten.map((d) => (
          <div className="w-64 h-96 bg-white border border-gray-200 rounded-md shadow-sm p-2 mx-4">
            <img className="rounded-t-md w-full h-48 object-cover" src={d.image} alt="Discount image" width="250" height="250" />
            <div class="p-2 flex-1">
              <h5 className="mb-1 text-lg text-black font-semibold tracking-tight">
                {d.name}
              </h5>
              <p className="mb-2 text-base text-black">
                {d.description}
              </p>
              <p className="mb-3 text-base text-black">
                ${d.price}
              </p>
              <a
                href="#"
                className="inline-block px-2 py-1 text-xs font-medium text-center text-white cursor-pointer bg-amber-500 rounded-md hover:bg-black transition"
                onClick={() => handleClick(d.name, d.price)}>
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
