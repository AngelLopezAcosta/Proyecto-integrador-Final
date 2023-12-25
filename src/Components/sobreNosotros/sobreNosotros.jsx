const SobreNosotros = () => {
  return (
    <main>
      <section className="cart" id="cart_section">
        <article className="cart_items" id="Cart-items"></article>

        <article className="cart_finish">
          <div>
            <h2>Subtotal</h2>
            <span id="total">PRECIO TOTAL</span>
          </div>
          <button id="cart_submit">Finalizar Pedido</button>
        </article>
      </section>

      <section className="us">
        <article className="us-item item1">
          <p>
            Somos una compañía dedicada a la venta de productos que hagan tu
            vida mas fácil. Cada par cuenta con una calidad superior que te
            acompañará día a día.
          </p>
        </article>
        <article className="us-item item2"></article>
        <article className="us-item item3">
          <h2>Conócenos</h2>
        </article>
        <article className="us-item item4">
          <p>
            Contamos con los mejores proveedores del mercado para darle a los
            clientes una experiencia que les haga querer volver. Traemos
            diversidad en los modelos y unos precios imperdibles.
          </p>
          <p>
            Tenemos a personal especilizado en el mundo del calzado que estará
            más que encantado de orientarte para que tengas ese par que tanto
            deseas.
          </p>
        </article>
        <article className="us-item item5"></article>
        <article className="us-item item6"></article>
        <article className="us-item item7">
          <p>
            Nos aseguramos de que cada cliente se sienta satisfecho con lo que
            se lleva. Es por esto que con cada compra que realices tendrás
            dentro del empaque de tus calzados una tarjeta de regalo que podrás
            usar en tu siguiente compra. !No te pierdas de este excelente
            beneficio!
          </p>
        </article>
      </section>
    </main>
  );
};
export default SobreNosotros;
