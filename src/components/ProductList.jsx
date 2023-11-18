/* eslint-disable react/prop-types */

const ProductList = ({product: {imageURL, name, price}}) => {
  // const { imageURL, name, price } = product;
  // const { imageURL, name, price } = props.product;
  return (
    <div className="product">
      <img src={imageURL} alt="" />
      <div className="product__details">
        <h4 className="product__name">{name}</h4>
        <p className="product__price">Price: {price}</p>
      </div>
    </div>
  );
};

export default ProductList;
