import { useSelector } from "react-redux";
import { getCartSlicedState } from "../redux/slices/cartSlice";

const Cart = () => {
  const items = useSelector(getCartSlicedState);

  console.log(items);
  return (
    <>
      <nav className="bg-green-200 text-green-700 p-4">
        <h3 className="text-center">
          Total No of Products: {items.length} <br /> Total Price is :$
          {items.reduce((a: any, b: any) => a + b.price, 0)}
        </h3>
      </nav>
    </>
  );
};

export default Cart;
