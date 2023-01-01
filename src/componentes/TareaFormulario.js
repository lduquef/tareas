import React from "react";
import '../styles-sheets/TareaFormulario.css'
function TareaFormulario (props) {   
  return(
		<form className="tarea-formulario">
			<input className="tarea-input"
			type='text'
			placeholder="escribe una Tarea"
			name="texto"/>
			<button className="tarea-boton"> 
				Agregar Tarea
			</button>
		</form>
  )
}

export default TareaFormulario; 