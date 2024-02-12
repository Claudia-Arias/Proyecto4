import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./login.css";
import Footer from "../components/NavFooter/Footer";
import Navbar from "../components/NavFooter/Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [textoBoton, setTextoBoton] = useState("Login");

  function handleLogin() {
    if (username === "usuarioValido" && password === "contraseñaValida") {
      setTextoBoton("hola");
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }
  return (
    <>
      <Navbar />

      <div className="loginname">
        <h2>Wheel of Doom</h2>
        <form>
          <div className="loginusuario">
            <label htmlFor="username">User</label>
            <input type="text" id="username" name="username" required></input>
          </div>
          <div className="logincontraseña">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            ></input>
          </div>
          <button
            className="buttonLogin"
            text="login"
            type="button"
            onClick={handleLogin}
          >
            {textoBoton}
            {/* <Link to="/Home">{textoBoton}</Link> */}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
