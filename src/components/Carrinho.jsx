import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem, delItem } from "../redux/action/index";


const Carrinho = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleOpen = (item) => {
    dispatch(addItem(item));
  };
  const handleClose = (item) => {
    dispatch(delItem(item));
  };


  const cartItems = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5" key={cartItem.codigo}>
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.foto1}
                  alt={cartItem.produto}
                  height="auto"
                  width="200px"
                />
              </div>
              <div className="col-md-4">
                <h3>{cartItem.produto}</h3>
                <p className="lead fw-bold">
                  {cartItem.qty} X R$ {cartItem.venda} = R$
                  {cartItem.qty * cartItem.venda}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleClose(cartItem)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleOpen(cartItem)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Seu carrinho está vazio</h3>
          </div>
        </div>
      </div>
    );
  };


  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Finalizar compra
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Carrinho;
