import watch2 from "../../image/watch.jpeg";
import PropTypes from "prop-types";
const SingleProduct = ({ img = watch2, name = "Watch", price = 600 }) => {

  return (
    <div
      onClick={() => {
        alert(`You clicked on the ${name} product`);
      }}
      className="single_product"
    >
      <div className="prod_start">
        <img src={img} alt={name} />
        <div className="prod_group">
          <span className="product_name">{name}</span>
          <span className="product_price">${price}</span>
        </div>
      </div>

      <div className="button_group">
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div>
  );
};
SingleProduct.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};
// SingleProduct.defaultProps = {
//   name: "Watch",
// };
export default SingleProduct;
