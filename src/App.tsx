import products from "../products.json";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Cart />
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Products key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default App;
