import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-black text-center mt-5">
        What do we offer ?
      </h1>

      <div className="flex flex-wrap my-10 mx-20">
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
              alt="vegetables" />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                  Fresh Vegetables
                </h2>
                <p className="mt-2 text-sm text-white">
                  fresh vegetables that are sourced from local farms whenever possible.
                </p>
                <Link to="Vegetables">
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=1200:*"
              alt="vegetables" />
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                  Fresh Fruits
                </h2>
                <p className="mt-2 text-sm text-white">
                  fresh Fruits that are sourced from local farms whenever possible.
                </p>
                <Link to="Fruits">
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg focus:outline-none">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://facts.net/wp-content/uploads/2022/06/different-types-of-meat.jpg"
              alt="vegetables" />
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                  Fresh Meats
                </h2>
                <p className="mt-2 text-sm text-white">
                  Our meat department is dedicated to providing our customers with the freshest, highest quality meats available.
                </p>
                <Link to="Meats">
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg focus:outline-none">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg"
              alt="vegetables" />
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                  Fresh Dairy
                </h2>
                <p className="mt-2 text-sm text-white">
                  Our dairy section is stocked with a wide variety of fresh dairy products that are sourced from local farms and suppliers.
                </p>
                <Link to="Dairy">
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg focus:outline-none">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://www.bakingbusiness.com/ext/resources/2019/8/08192019/GlobalTrends.jpg?height=667&t=1566494557&width=1080"
              alt="vegetables" />
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                  Fresh Bakery
                </h2>
                <p className="mt-2 text-sm text-white">
                  Our bakery section is dedicated to providing our customers with the freshest and most delicious baked goods available.
                </p>
                <Link to="Bakery">
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg focus:outline-none">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://www.daysoftheyear.com/wp-content/uploads/frozen-food-day-scaled.jpg"
              alt="vegetables" />
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                  Frozen Foods
                </h2>
                <p className="mt-2 text-sm text-white">
                  Our frozen section is stocked with a variety of high-quality frozen foods that are perfect for quick and easy meals or snacks.
                </p>
                <Link to="Frozen">
                  <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg focus:outline-none">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;