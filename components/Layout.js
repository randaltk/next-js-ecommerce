import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Notify from "./Notify";
import Modal from "./Modal";

function Layout({ children }) {
  return (
    <div style={{ backgroundImage: "url('/public/Branco.jpg')" }}>
      <div className="container">
        <Logo />
        <NavBar />
        <Notify />
        <Modal />
        {children}
      </div>
    </div>
  );
}

export default Layout;
