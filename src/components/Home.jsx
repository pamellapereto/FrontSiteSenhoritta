import React from "react";
import Produtos from "./Produtos";

export default function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/carrossel/slide1.png" class="d-block w-100" alt="Outlet especial" height="525px" />
          </div>
          <div class="carousel-item">
            <img src="/assets/carrossel/slide2.jpg" class="d-block w-100" alt="Coleção a botanista" height="525px" />
          </div>
          <div class="carousel-item">
            <img src="/assets/carrossel/slide3.jpg" class="d-block w-100" alt="Novidades" height="525px" />
          </div>
          <div class="carousel-item">
            <img src="/assets/carrossel/slide4.jpg" class="d-block w-100" alt="Nova coleção verão 2022" height="525px" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
      </div>
      <Produtos />
    </div>
  )
}
