import CartItem from "./cartItem";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const inCartFood = props.cartItem;
  const userData = JSON.parse(localStorage.getItem("USER"));

  return (
    <section className={"cart " + props.displayState} id="cart_section">
      <article className="cart_items" id="Cart-items">
        {inCartFood.map((shoe) => (
          <CartItem
            Name={shoe.Name}
            Price={shoe.Price}
            Img={shoe.Img}
            Amount={shoe.Amount}
            key={Math.random()}
            onIncrease={props.onIncrease}
            onReduce={props.onReduce}
          />
        ))}
      </article>

      <article className="cart_finish">
        <div>
          <h2>Subtotal</h2>
          <span id="total">
            {inCartFood[0]
              ? "$" +
                inCartFood
                  .reduce((a, c) => {
                    return (a += parseFloat(c.Price) * c.Amount);
                  }, 0)
                  .toFixed(2)
              : "TOTAL A PAGAR"}
          </span>
        </div>
        <button id="cart_Update" onClick={props.onUpdate}>
          Guardar
        </button>
        <button id="cart_submit">
          <Link to={userData ? "/Usuario/Carrito" : "/Ingresar"}>
            Finalizar el Pedido
          </Link>
        </button>
      </article>
    </section>
  );
};
export default Cart;
