import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { ipnode } from "../config/ip";

export default function Produtos() {

  const [data, setData] = useState([
    {
      codigo: "",
      produto: "",
      descricao: "",
      categoria: "",
      venda: "",
      foto1: "foto.jpg",
    },
  ]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await fetch(`${ipnode}/api/produtos/listar`)

        .then((response) => response.json())
        .then((rs) => {
          setData(rs.output);
          setFilter(rs.output)
          console.log(rs);
          setLoading(false);
        })

        .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));

    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.categoria === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            Todas as categorias
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("blusas")}
          >
            Blusas
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("saias")}
          >
            Saias
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("calças")}
          >
            Calças
          </button>


          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("vestidos")}
          >
            Vestidos
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("macacoes")}
          >
            Macacões
          </button>

        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.codigo}>

                  <a href={`/produtos/${product.codigo}`}>
                    <img
                      src={product.foto1}
                      className="card-img-top"
                      alt={product.produto}
                      height="250px"
                    /></a>
                  <div className="card-body">
                    <a href={`/produtos/${product.codigo}`} style={{textDecoration: "none"}}> 
                      <h4 className="card-title mb-0">
                        {" "}
                        {product.produto}
                      </h4>
                      <p className="card-text lead fw-bold my-3" style={{fontFamily: 'League Spartan, sans-serif', color: "#4169E1"}}>
                        R$ {product.venda}
                      </p>

                      <style>
                        @import url('https://fonts.googleapis.com/css2?family=League+Spartan&display=swap');
                      </style>

                      <p className="card-text lead" style={{ fontFamily: 'League Spartan, sans-serif', color: "#000" }}>
                        {product.descricao.substring(0, 51)} →
                      </p>

                    </a>
                    <NavLink
                      to={`/produtos/${product.codigo}`}
                      className="btn btn-dark ms-2 px-3 py-2 my-4"
                    >
                      Comprar produto
                    </NavLink>

                  </div>
                </div>
              </div>
            </>
          );
        })
        }
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center txtTitulo" style={{ fontSize: "27pt" }}>Nossos produtos</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
