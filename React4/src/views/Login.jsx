// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Home from "./Home";
// import "./login.css";
// import Footer from "../components/NavFooter/Footer";
// import Navbar from "../components/NavFooter/Navbar";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [textoBoton, setTextoBoton] = useState("Login");

//   function handleLogin() {
//     if (username === "usuarioValido" && password === "1234") {
//       setTextoBoton("hola");
//       setError("");
//     } else {
//       setError("Usuario o contraseña incorrectos");
//     }
//   }
//   return (
//     <>
//       <Navbar />

//       <div className="loginname">
//         <h2>Wheel of Doom</h2>
//         <form>
//           <div className="loginusuario">
//             <label htmlFor="username">User</label>
//             <input type="text" id="username" name="username" required></input>
//           </div>
//           <div className="logincontraseña">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//             ></input>
//           </div>
//           <button
//             className="buttonLogin"
//             text="login"
//             type="button"
//             onClick={handleLogin}
//           >
//             {textoBoton}
//             {/* <Link to="/Home">{textoBoton}</Link> */}
//           </button>
//           {error && <p className="error">{error}</p>}
//         </form>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./login.css";
import Footer from "../components/NavFooter/Footer";
import Navbar from "../components/NavFooter/Navbar";

function Login() {
  const [textoBoton, setTextoBoton] = useState("Login");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    const maxLength = 5;
    const password = event.target.value.slice(0, maxLength);
    setPasswordError("");
  };
  function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameRegex = /^[a-zA-Z0-9]{1,8}$/;
    const passwordRegex = /^(?=.*\d)[a-zA-Z\d]{5,}$/;

    if (!usernameRegex.test(username)) {
      setUsernameError("El nombre de usuario debe contener hasta 8 caracteres alfanuméricos");
    } else{
      setUsernameError("");
    }
    if (!passwordRegex.test(password)) {
      setPasswordError('La contraseña debe tener al menos 5 caracteres, incluido un número');
    } else {
      setPasswordError('');
    }
    if (usernameError === '' && passwordError  === '') {
    setTextoBoton("hola");
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
            <input type="text" id="username" name="username" required />
            {usernameError && <small style={{color:'red'}}>{usernameError}</small>}
          </div>
          <div className="logincontraseña">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            {passwordError && <small style={{color: 'red'}}>{passwordError}</small>}
          </div>
          <button
            className="buttonLogin"
            text="login"
            type="submit"
            onClick={handleLogin}
          >
            <Link to="/Home">{textoBoton}</Link>
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
