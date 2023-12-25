import vineshard from "../../img/FondoZapatos.jpg";

const Shoesar = () => {
  return (
    <section className="Shoesar_background">
      <div className="Shoesar">
        <article className="Shoesar_img">
          <img src={vineshard} alt="" />
        </article>
        <article className="Shoesar_article">
          <h2>Shoesar, 15 años de tendencias</h2>
          <p>
            ¡Bienvenido a nuestra tienda de zapatos! ¿Estás buscando el calzado
            perfecto para completar tus looks? En nuestra tienda, encontrarás
            una amplia selección de zapatos para todas las ocasiones. Desde
            elegantes tacones para una noche especial hasta cómodos sneakers
            para tus actividades diarias, tenemos todo lo que necesitas.
            Nuestros productos son de alta calidad, fabricados con los mejores
            materiales para asegurar durabilidad y comodidad. Además, ofrecemos
            una variedad de tallas y estilos para adaptarnos a todos los gustos
            y necesidades. Ven y descubre nuestras últimas tendencias de moda en
            calzado, ¡te garantizamos que encontrarás ese par perfecto que
            estabas buscando! Nuestro amable personal estará encantado de
            ayudarte a encontrar el par de zapatos ideal para ti. ¡No esperes
            más y visita nuestra tienda de zapatos hoy mismo! ¡Te esperamos con
            los brazos abiertos y los mejores zapatos de la ciudad!
          </p>
          <div className="corner_top"></div>
          <div className="corner_botom"></div>
        </article>
      </div>
    </section>
  );
};
export default Shoesar;
