import React, { useState } from "react";
import { appFirebase } from "./fb";

const Login = ({ setUsuario }) => {
  const [isRegistrando, setIsRegistrando] = useState(false);

  const crearUsuario = (correo, password) => {
    appFirebase
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("Usuario creado", usuarioFirebase);
        setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    appFirebase.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase)=> {
      console.log("Usuario iniciado", usuarioFirebase.user);
      setUsuario(usuarioFirebase);
    })
  }

  const submithandle = (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div className="container row mx-auto justify-content-center aling-items-center">
      <form onSubmit={submithandle}>
        <h1>{isRegistrando ? "Registrate" : "Iniciar sesion"} </h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input className="form-control" type="email" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input className="form-control" type="password" id="password" />
        </div>
        <div className="">
          <button className="btn btn-primary col-3" type="submit">
            {isRegistrando ? "Registrate" : "Iniciar sesion"}{" "}
          </button>
        </div>
      </form>

      <button
        className="btn btn-primary mt-3 col-3"
        onClick={() => {
          setIsRegistrando(!isRegistrando);
        }}
      >
        {isRegistrando
          ? "Ya tienes cuenta? !inicia sesion"
          : "No tienes Cuenta? !Registrate"}
      </button>
    </div>
  );
};

export default Login;
