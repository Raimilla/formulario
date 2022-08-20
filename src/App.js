// importando lo que se necesita de React
import React, { useState } from 'react'
import Formulario from './components/Formulario';


// componente funcional App
function App() {
  // definiendo estado inicial de nombre , pass y error, asi como variable de seteo de nombre, pass y error
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState(false);


  return (
    <>
      <div className='conjunto'>
        <h1>Desafio Formulario</h1>
        {/* llamada al componente funcional Formulario */}
        <Formulario
          labelName={"Nombre:"}
          labelPass={"Password:"}
          name={nombre}
          setName={setNombre}
          pass={clave}
          setPass={setClave}
          error={error}
          setError={setError}
        />
      </div>
    </>
  );
}

export default App;
