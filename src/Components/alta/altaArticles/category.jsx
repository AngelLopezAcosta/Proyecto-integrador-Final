const Category = ({ category, setCategory, sub }) => {
  return (
    <article className="form__field">
      <div className="Div" id="categoria-div">
        <label htmlFor="shoe-category" className="form__label">
          CATEGORÍA DE ZAPATO:
        </label>
        <div className="Div__radio">
          <input
            type="radio"
            id="sport"
            name="shoe-category"
            className="shoe-category"
            checked={category.value === "sport"}
            value="sport"
            onChange={(event) => setCategory(event.target.value)}
          />
          <label htmlFor="sport">Sport</label>
          <input
            type="radio"
            id="botas"
            name="shoe-category"
            className="shoe-category"
            checked={category.value === "botas"}
            value="botas"
            onChange={(event) => setCategory(event.target.value)}
          />
          <label htmlFor="botas">Botas</label>
          <input
            type="radio"
            id="tacos"
            name="shoe-category"
            className="shoe-category"
            checked={category.value === "tacos"}
            value="tacos"
            onChange={(event) => setCategory(event.target.value)}
          />
          <label htmlFor="tacos">Tacos</label>
          <input
            type="radio"
            id="sandalias"
            name="shoe-category"
            className="shoe-category"
            checked={category.value === "sandalias"}
            value="sandalias"
            onChange={(event) => setCategory(event.target.value)}
          />
          <label htmlFor="sandalias">Sandalias</label>
        </div>
      </div>
      {category.er !== "" && sub && (
        <p id="categoria-error" className="animated">
          Elija una categoria
        </p>
      )}
    </article>
  );
};
export default Category;
