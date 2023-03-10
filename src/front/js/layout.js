import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Freelancers } from "./pages/freelancers";
import { Completaperfil } from "./pages/completaperfil";
import { Buscafreelancer } from "./pages/buscafreelancer";
import { Perfilbusqueda } from "./pages/perfilbusqueda";
import { Empresafavoritos } from "./pages/empresafavoritos";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  useEffect(() => {
    try {
      const resp = fetch(process.env.BACKEND_URL + "/api/cargar_datos");
    } catch (error) {
      console.log("Error loading message from backend", error);
    }
  }, []);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Freelancers />} path="/perfil" />
            <Route
              element={<Completaperfil />}
              path="/completaperfil"
            />
            <Route element={<Buscafreelancer />} path="/buscafreelancer" />
            <Route element={<Perfilbusqueda />} path="/perfilbusqueda/:userid" />
            <Route element={<Empresafavoritos />} path="/empresafavoritos/" />
            <Route element={<Single />} path="/single/:theid" />

            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
