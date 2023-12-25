import CartContext from "../../cart/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Shoe = ({ shoe }) => {
  let image = shoe.image;

  const ctx = useContext(CartContext);

  const Add = () => {
    ctx.onAdd(shoe.name, image, shoe.price, shoe.stock);
  };
  return (
    <div className="shoe_div">
      <img className="shoe_img" src={image} alt={wine.name} />
      <div className="shoe_buttons">
        <div className="shoe_buttons-container">
          <button className="buy-link">
            <Link to={`/${shoe.name}`} className="reset">
              $ COMPRAR
            </Link>
          </button>
          <button className="buy-link" onClick={Add}>
            <i className="fa fa-shopping-cart"></i>
            Añadir al carrito
          </button>
        </div>
        <p className="short_des">{shoe.short_description}</p>
      </div>
      <h2>
        {shoe.name} ({shoe.stock})
      </h2>
      <h2>${shoe.price}</h2>
    </div>
  );
};
export default Shoe;
