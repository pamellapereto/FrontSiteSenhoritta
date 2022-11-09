import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action";
import { NavLink } from "react-router-dom";
import { ipnode } from "../config/ip";

const ProdutoDetalhes = ({ codigo }) => {

    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState({
        codigo: "",
        produto: "",
        descricao: "",
        categoria: "",
        venda: "",
        foto1: "foto.jpg",
        foto2: "foto2.jpg",
        foto3: "foto3.jpg",
        foto4: "foto4.jpg",
    })


    const [carrinhoBtn, setCarrinhoBtn] = useState("Adicionar ao carrinho")

    console.log(codigo);


    useEffect(() => {


        const getProduct = async () => {
            setLoading(true);
            await fetch(`${ipnode}/api/produtos/listar/${codigo}`)
                .then((response) => response.json())
                .then((rs) => {
                    setProduct(rs.output[0]);
                    console.log(rs.output[0]);
                    setLoading(false);
                })
                .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
        };

        getProduct();


    }, []);

    const dispatch = useDispatch();

    const handleCart = (product) => {
        if (carrinhoBtn === "Adicionar ao carrinho") {
            dispatch(addItem(product))
            setCarrinhoBtn("Remover do carrinho")
        }
        else {
            dispatch(delItem(product))
            setCarrinhoBtn("Adicionar ao carrinho")
        }
    }


    const Loading = () => {
        return (
            <>
                <div className="d-flex mx-auto justify-content-center">
                    <img src="/assets/loading.gif" width="300" height="auto" />
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 d-flex mx-auto cardProduct product" style={{ width: "400px", height: "450px" }}>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={product.foto1} alt={product.produto} style={{ width: "400px", height: "450px" }} />
                            </div>
                            <div class="carousel-item">
                                <img src={product.foto2} alt={product.produto} style={{ width: "400px", height: "450px" }} />
                            </div>
                            <div class="carousel-item">
                                <img src={product.foto3} alt={product.produto} style={{ width: "400px", height: "450px" }} />
                            </div>

                            <div class="carousel-item">
                                <img src={product.foto4} alt={product.produto} style={{ width: "400px", height: "450px" }} />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Próxima</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>
                    </div>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h4 className="text-uppercase text-black-50" style={{ fontSize: "13pt" }}> {product.categoria} </h4>
                    <h1 className="display-5 fw-bold" style={{ fontSize: "27pt" }}> {product.produto} </h1>
                    <h2 className="fw-bold my-4"> R$ {product.venda} </h2>
                    <p className="lead"> {product.descricao} </p>
                    <button
                        className="btn btn-outline-dark ms-2 px-3 py-2" style={{ marginBottom: "12px" }}
                        onClick={() => handleCart(product)}
                    >{carrinhoBtn}</button>

                    <NavLink to="/carrinho" className="btn btn-dark ms-2 px-3 py-2">
                        Ir para o carrinho
                    </NavLink>
                </div>
            </>
        )
    };

    return (
        <div>
            <div className="container my-4 py-3">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}

export default ProdutoDetalhes;
