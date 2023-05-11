import { useContext } from "react";
import Jumbotron from "../Jumbotron";
import { CartContext, ProductContext } from "../../App";

const Vegetables = () => {

  const { data } = useContext(ProductContext);

  const vegetables = data.filter((product) => product.category === "vegetables");

  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Jumbotron />
      <div className="md:container md:mx-auto">
        <div className="flex flex-wrap justify-start mx-4">
          {vegetables.map((d, i) => (
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
              key={i}>
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-2 h-full">
                <img
                  className="rounded-t-md w-full h-40 object-cover object-center"
                  src={d.image}
                  alt=""/>
                <div className="p-2 h-full">
                  <h5 className="mb-1 text-lg font-semibold tracking-tight text-black">
                    Name: {d.name}
                  </h5>
                  <p className="mb-2 text-base text-black">
                    {d.description}
                  </p>
                  <p className="mb-3 font-normal text-base text-black">
                      Price: ${d.price}
                  </p>
                  <a onClick={() => handleAddToCart(d)}
                    className="inline-block px-2 py-1 text-xs font-medium text-center text-white cursor-pointer bg-amber-500 rounded-md hover:bg-black transition">
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
}

export default Vegetables;