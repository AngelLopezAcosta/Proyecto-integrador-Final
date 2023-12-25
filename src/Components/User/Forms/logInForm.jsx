import { useState } from "react";
import useUser from "../../../Hooks/user-user";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { log } = useUser(
    "Entrando...",
    "Bienvenido a Shoesar",
    "Email o contraseña incorrectos"
  );

  const submitHandler = (event) => {
    event.preventDefault();
    log(
      { email: email, password: pass },
      `${process.env.REACT_APP_API_URL}/Shoesar/Users/Login`
    );
  };
  return (
    <form action="" onSubmit={submitHandler}>
      <h2>Shoesar</h2>
      <p>Bienvenido a Shoesar, por favor introduzca su usuario y contraseña</p>
      <input
        type="text"
        id="email"
        className="form__input"
        required
        minLength="3"
        value={email}
        placeholder="EMAIL"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <p id="Email" className="animated"></p>
      <input
        type="password"
        id="Pass"
        className="form__input"
        required
        minLength="3"
        value={pass}
        placeholder="CONTRASEÑA"
        onChange={(event) => {
          setPass(event.target.value);
        }}
      />
      <p id="Password" className="animated"></p>
      <div>
        <Link to="/">Cambiar contraseña</Link>
        <span>/</span>
        <Link to="/CrearCuenta">Crear un nuevo usuario</Link>
      </div>
      <button>Entrar</button>
    </form>
  );
};

export default LogInForm;
