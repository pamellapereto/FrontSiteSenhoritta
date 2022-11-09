import React from "react";
import { NavLink } from "react-router-dom";
import BtnCarrinho from './buttons/BtnCarrinho'
import Login from './buttons/Login';
import Cadastro from './buttons/Cadastro';
import { hover } from "@testing-library/user-event/dist/hover";


export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">

        <div className="container-fluid py-2">


          <a href="/"><img src="/assets/logo.png" n alt="logo" width="75px" style={{ marginLeft: "9px", marginRight: "10px" }} /></a>

          <style>
            @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
          </style>

          <NavLink className="nav-link navbar-brand fw-bold fs-4" to="/">SENHORITTA</NavLink>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <span className="txtMenu">Início</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/produtos">
                <span className="txtMenu">Produtos</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sobre">
                <span className="txtMenu">Sobre</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contato">
                <span className="txtMenu">Contato</span>
                </NavLink>
              </li>
            </ul>

            <Login />
            <Cadastro />
            <BtnCarrinho />

          </div>

        </div>
      </nav>
    </>
  );
}
