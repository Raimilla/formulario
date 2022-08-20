import { useState } from "react";
import BotonForm from "./BotonForm";

function Formulario({ 
   labelName, 
   labelPass,
   name,
   setNombre,
   pass,
   setPass,
   error,
   setError
   }) {

  // codigo show boton 
  const showBotonCode = 252525;

  // functions
  function validarPass(event) {
    event.preventDefault();
    setPass(event.target.value);
  }


  // return html
  return (
    <>
      <div className="col">
        <label className="etiqueta">{labelName}</label>
        <input className="form-control" type="text" Placeholder="Name"/>
      </div>
      <br>
      </br>
      <div className="col">
        <label className="etiqueta">{labelPass}</label>
        <input className="form-control" type="number" Placeholder="Password" onChange={validarPass} />
      </div>

      <div>{pass == showBotonCode ? <BotonForm /> : null}</div>
    </>
  );
}

export default Formulario;