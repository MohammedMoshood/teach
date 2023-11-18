import SingleProduct from "./SingleProduct";
import { products_array } from "./data";
const ProductList = () => {
  return (
    <div className="product_list">
      <h1>Checkout</h1>
      {products_array.map((item) => {
        const { image, name, price } = item;
        return <SingleProduct img={image} name={name} price={price} />;
      })}
    </div>
  );
};

export default ProductList;
