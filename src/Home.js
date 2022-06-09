import React from 'react'
import { appFirebase } from './fb'

const Home = () => {


  const cerrarSesion = () => {
    appFirebase.auth().signOut();
  }


  return (
    <div className='container text-center'>
      <h1 className='mt-4'>Bienvenido sesion iniciada </h1>
      <button onClick={cerrarSesion} className='btn btn-danger'>Cerar sesion</button>
    </div>
  )
}

export default Home