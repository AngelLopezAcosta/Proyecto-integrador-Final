import useSingUp from "../../../Hooks/use-singUp";
import useError from "../../../Hooks/use-error";
import { useState } from "react";
import useUser from "../../../Hooks/user-user";
import { Link } from "react-router-dom";

const SingUpForm = () => {
  const [
    name,
    nameValidation,
    email,
    emailValidation,
    password,
    passwordValidation,
  ] = useSingUp();
  const makeError = useError();
  const [cPass, setCPass] = useState("");
  const { createUser } = useUser(
    "Generando Usuario...",
    "Bienvenido a Shoesar",
    "Este email esta vinculado a una cuenta existente"
  );

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      name.er === "" &&
      email.er === "" &&
      password.er === "" &&
      password.value === cPass
    ) {
      createUser(
        { name: name.value, email: email.value, password: password.value },
        `${process.env.REACT_APP_API_URL}/Shoesar/Users/SingUp`
      );
    }
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <h2>Shoesar</h2>
      <p>Bienvenido a Shoesar cree su usuario </p>
      <input
        type="text"
        id="user"
        className="form__input"
        value={name.value}
        required
        minLength="6"
        placeholder="NOMBRE"
        onChange={(event) => {
          nameValidation(event.target.value);
        }}
      />
      {name.er !== "" && name.er && <p id="name-error">{makeError(name.er)}</p>}

      <input
        type="email"
        id="email"
        className="form__input"
        value={email.value}
        required
        placeholder="EMAIL"
        onChange={(event) => {
          emailValidation(event.target.value);
        }}
      />
      {email.er !== "" && email.er && (
        <p id="name-error">{makeError(email.er)}</p>
      )}

      <input
        type="password"
        id="Pass"
        className="form__input"
        value={password.value}
        required
        minLength="8"
        placeholder="CONTRASEÑA"
        onChange={(event) => {
          passwordValidation(event.target.value);
        }}
      />
      {password.er !== "" && password.er && (
        <p id="name-error">{makeError(password.er)}</p>
      )}

      <input
        type="password"
        id="PassC"
        className="form__input"
        value={cPass}
        required
        minLength="8"
        placeholder="REPETIR CONTRASEÑA"
        onChange={(event) => {
          setCPass(event.target.value);
        }}
      />
      {cPass !== password.value && cPass !== "" && (
        <p id="name-error">Las contraseñas no coinciden</p>
      )}

      <div>
        <span>Ya tienes cuenta creada</span>
        <span>/</span>
        <Link to="/LogIn">Entrar</Link>
      </div>
      <button>Crear Cuenta</button>
    </form>
  );
};

export default SingUpForm;
