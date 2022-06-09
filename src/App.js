
import React, { useEffect, useState } from 'react'
import { appFirebase } from './fb'
import Home from './Home';
import Login from './Login';


const App = () => {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {

    appFirebase.auth().onAuthStateChanged((usuarioFirebase) => {

      console.log("Usuario iniciado", usuarioFirebase);
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    })
    
  }, [])
  


  return (
    <div>
      {usuario ? <Home /> : <Login setUsuario={setUsuario}/>}
    </div>
  )
}

export default App