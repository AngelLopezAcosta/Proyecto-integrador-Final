import { useState, useEffect, useContext, useCallback } from "react";
import { useParams,useLocation,useNavigate } from "react-router-dom";
import CartContext from "../cart/CartContext";
import ReactImageZoom from 'react-image-zoom';

const ItemPage = () => {
  const { name } = useParams();
  const query = useLocation().search.slice(1);
  const navigate = useNavigate();

  const [shoe, setShoe] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let image = shoe.image ? shoe.image : "";
  const ctx = useContext(CartContext);
  const props = { img: image, zoomPosition: "original", width: 300 };

  const Add = () => {
    ctx.onAdd(shoe.name, image, shoe.price, shoe.stock, quantity);
  };

  const getShoe = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/Shoesar/Products/Buy/${name}?key=${query}`
      );
      if (!response.ok) {
        throw new Error("Error fetching shoes");
      }
      const data = await response.json();
      setShoe(data);
    } catch (error) {
      console.error("Error fetching shoe data:", error);
      navigate("/");
    }
  }, [name, query]);

  useEffect(() => {
    getShoe();
  }, [getShoe]);
  if (shoe) {
    return (
      <main className="itemPage">
        <section className="itemSec">
          <article className="itemImg">
            {image && <ReactImageZoom {...props} />}
            <img
              src={image}
              alt={name}
              style={{ height: "110px", width: " 110px" }}
            />
          </article>
          <article className="itemArt">
            <h2 className="under">{name + ` (${shoe.stock})`}</h2>
            <h3 className="under">CONTENT</h3>
            <p className="under">{shoe.long_description}</p>

            <div className="itemAdd">
              <p>Precio por unidad</p>
              <span className="price">{"$ " + shoe.price}</span>

              <p>Seleccione Cantidad</p>

              <div className="item-buttons">
                <button
                  onClick={() => {
                    setQuantity(() => (quantity === 1 ? 1 : quantity - 1));
                  }}
                >
                  -
                </button>
                <div>{quantity}</div>
                <button
                  onClick={() => {
                    setQuantity(() =>
                      quantity === shoe.stock ? quantity : quantity + 1
                    );
                  }}
                >
                  +
                </button>
              </div>
              <button className="add" onClick={Add}>
                Agregar al carrito
              </button>
            </div>
          </article>
          <div className="corner_top1"></div>
          <div className="corner_botom1"></div>
          <div className="corner_top2"></div>
          <div className="corner_botom2"></div>
        </section>
      </main>
    );
  } else {
    return <h1></h1>;
  }
};

export default ItemPage;
