/* eslint-disable react/prop-types */
import ProductList from "./ProductList";
import "./product.css";
const ProductCard = ({ productCard }) => {
  let productItem = productCard.map((product) => (
    <ProductList key={product.id} product={product} />
  ));
  return <section className="products">{productItem}</section>;
};

export default ProductCard;
