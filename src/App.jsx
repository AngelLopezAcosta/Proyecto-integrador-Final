import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './Components/SASS/Styles.scss';

import Cart from './Components/cart/Cart';
import Alta from './Components/alta/alta';
import Contactos from './Components/contactos/Contactos';
import Footer from './Components/footer/footer';
import ItemPage from './Components/itemPage/ItemPage';
import Landing from './Components/landing/Landing';
import Menu from './Components/menu/Menu';
import Shop from './Components/Shop/Shop';
import SobreNosotros from './Components/sobreNosotros/SobreNosotros';
import LogIn from './Components/User/LogIn';
import SingUp from './Components/User/SingUp';
import useCart from './Hooks/use-cart';
import CartContext from './Components/cart/CartContext';
import UserPage from './Components/User/userPage/UserPage';
import UserAddress from './Components/User/userPage/UserInfo/UserAddress';
import UserAuth from './Components/User/userPage/UserInfo/UserAuth';
import UserCart from './Components/User/userPage/UserInfo/UserCart';
import UserOrders from './Components/User/userPage/UserInfo/UserOrders';
import UserProfile from './Components/User/userPage/UserInfo/UserProfile';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';

function App() {
  const [cartDysplay, setCartDisplay] = useState("");
  const [cartItems, addToCartHandler, reduce, increase, clear, update, set] =
    useCart();
  const location = useLocation();

  const showCart = () => {
    setCartDisplay((prevDisplay) => (prevDisplay === "" ? "show" : ""));
  };

  return (
    <Router>
      <CartContext.Provider value={{ onAdd: addToCartHandler }}>
        <Cart
          displayState={cartDysplay}
          cartItem={cartItems}
          onIncrease={increase}
          onReduce={reduce}
          onUpdate={update}
        />
        <Menu setDisplayState={showCart} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Alta" element={<Alta />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/Tienda" element={<Shop />} />
          <Route path="/:name" element={<ItemPage />} />
          <Route path="/Ingresar" element={<LogIn />} />
          <Route path="/CrearCuenta" element={<SingUp />} />
          <Route
            path="/Usuario"
            element={
              userData ? (
                <UserPage resetCart={set} />
              ) : (
                <LogIn />
              )
            }
          >
            <Route index element={<UserProfile />} />
            <Route path="Direcciones" element={<UserAddress />} />
            <Route path="Pedidos" element={<UserOrders />} />
            <Route path="Autenticacion" element={<UserAuth />} />
            <Route path="Footer" element={<Footer />} />
            <Route path="ToastContainer" element={<ToastContainer />} />
            <Route
              path="Carrito"
              element={
                <UserCart
                  cartItem={cartItems}
                  onIncrease={increase}
                  onReduce={reduce}
                  clear={clear}
                />
              }
            />
          </Route>
          <Route path="/*" element={<h1>Error page not found</h1>} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </Router>
  );
}

export default App;