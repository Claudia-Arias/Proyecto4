import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/NavFooter/Footer";
import Navbar from "../components/NavFooter/Navbar";
import fondoEscuela from "../imagenes/fondoEscuela.png";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="contenedorPrincipal">
        {/* <img
          src={fondoEscuela}
          alt="Foto de la escuela"
          className="fondoEscuela"
        ></img> */}

        <div className="contenido">
          <h1>Selecciona una opción</h1>
          <button className="boton"  type="button">
            <Link to="/AdminList">Administrador Listas</Link>
          </button>

          <button className="boton" type="button">
            <Link to="/Raffle">Sorteo</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;