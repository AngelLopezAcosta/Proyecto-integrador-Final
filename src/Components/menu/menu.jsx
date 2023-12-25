import { useState, useEffect } from "react";
import { useState,useEffect } from "react";
import logo from "../img/LogoShoesar.png";

function Menu(props) {
  const [active, setActive] = useState({ Tienda: "active" });
  const [open, setOpen] = useState({ santa: null, menu: null, link: null });

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const pageName = currentPath.split("/").filter(Boolean)[0];
    setActive({ [pageName]: "active" });
  }, [currentPath]);

  const setSantaStatus = () => {
    setOpen(() =>
      open.link === null
        ? { santa: "open", menu: "show", link: "apere" }
        : { santa: null, menu: null, link: null }
    );
  };
  const userData = JSON.parse(localStorage.getItem("USER"));

  return (
    <header className="nav">
      <h1>
        {" "}
        <link to="/" className="logo">
          <img src={logo} alt=""></img>Shoesar
        </link>
      </h1>
      <nav className="nav_navbar">
        <div className={"nav_santa " + open.santa} onClick={setSantaStatus}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <menu className={"nav_menu " + open.menu}>
          <li className={"nav_li " + open.link}>
            <link to="/Tienda" className={"nav_Link " + active.Tienda}>
              Tienda
            </link>{" "}
          </li>
          {userData && userData.admin && (
            <li className={"nav_li " + open.link}>
              <link to="/Alta" className={"nav_Link " + active.Alta}>
                Alta
              </link>
            </li>
          )}
          <li className={"nav_li " + open.link}>
            <link to="/Contactos" className={"nav_Link " + active.Contactos}>
              Contactos
            </link>
          </li>
          <li className={"nav_li " + open.link}>
            <link
              to="/SobreNosotros"
              className={"nav_Link " + active.SobreNosotros}
            >
              Sobre Nosotros
            </link>
          </li>
          <li className={"nav_li " + open.link}>
            <link
              to={userData ? "/Usuario/Carrito" : "/Ingresar"}
              className="nav_Link"
              id={"nav_Link "}
              onMouseEnter={() => props.setDisplayState()}
              onMouseLeave={props.setDisplayState}
            >
              <i className="fa fa-shopping-cart"></i>
            </link>
          </li>
          <li className={"nav_li " + open.link}>
            <link
              to={userData ? "/Usuario" : "/Ingresar"}
              className={`nav_Link ${userData ? "log" : ""}`}
            >
              <i className="fa fa-user"></i>
            </link>
          </li>
        </menu>
      </nav>
    </header>
  );
}

export default Menu;
