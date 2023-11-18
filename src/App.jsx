import productData from "./data.json";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <ProductCard productCard={productData} />
      </div>
    </>
  );
}

export default App;
