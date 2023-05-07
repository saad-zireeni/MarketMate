import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3031/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            onChange={handleSearch}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-white text-black"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div className="md:container md:mx-auto">
        <div className="flex flex-wrap justify-center -mx-2">
          {filteredData.map((d, i) => (
            <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
            key={i}
          >
            <div className="bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2 h-full">
              <img
                className="rounded-t-md w-full h-40 object-cover object-center"
                src={d.image}
                alt=""
              />
              <div className="p-2 h-full">
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
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;