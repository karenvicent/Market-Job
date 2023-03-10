import React, { useContext } from "react";
import designer from "../../img/designer.png";
import shirt from "../../img/tshirts.png";
import work from "../../img/workingppl.png";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="d-flex">
        <div className="texthome w-50">
          <h2>
            Encuentra los mejores profesionales que mejor se adaptan a las
            necesidades de tu empresa
          </h2>
          <p className="pt-5">
            <b>market match</b> te ayuda a encontrar trabajadores por horas que
            mejor se adapten a tus necesidas y si eres un <b>freelance</b>{" "}
            buscando trabajar para una empreza calificada, este es tu lugar
          </p>

          {localStorage.getItem("accessToken") ? (
          <div className="d-grid col-6">
          <Link to="/completaperfil">
            <button type="button" className="btn btn-default text-white">
              Completa tu Perfil
            </button>
          </Link>
        </div>


          ): (
            <div className="d-grid col-6">
            <Link to="/signup">
              <button type="button" className="btn btn-default text-white">
                Registrate Aquí
              </button>
            </Link>
          </div>
          )
        }
        </div>
        <div
          className="d-flex w-50 mb-5"
          style={{ height: "300px", width: "200px" }}
        >
          <div>
            <div
              id="carouselExampleCaptions"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div
                className="carousel-inner w-100"
                style={{ height: "500px", width: "1000px" }}
              >
                <div className="carousel-item active">
                  <img src={designer} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item w-100">
                  <img src={shirt} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item w-100">
                  <img src={work} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block text-black"></div>
                </div>
              </div>

              <button
                className="carousel-control-prev position-absolute"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-black position-relativec"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden text-black">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-black"
                  aria-hidden="false"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-100px"></div>
      </div>

      <div id="empresasconfian" className="text-center empresas p-3">
        <h4 className="mt-5">Estas son las empresas que confían en nosotros</h4>
      </div>

      <div className="text-center mb-5">
        <i className="fab fa-apple fa-3x mt-3 pe-5" />
        <i className="fab fa-amazon fa-3x mt-3 pe-5" />
        <i className="fab fa-google fa-3x mt-3 pe-5" />
        <i className="fab fa-google-play fa-3x mt-3 pe-5" />
        <i className="fab fa-ebay fa-3x mt-3 pe-5" />
        <i className="fab fa-facebook fa-3x mt-3 pe-5" />
        <i className="fab fa-snapchat fa-3x mt-3 pe-5" />
        <i className="fab fa-cc-amex fa-3x mt-3 pe-5" />
      </div>
    </div>
  );
};
