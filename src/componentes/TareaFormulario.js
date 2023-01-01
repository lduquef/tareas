import React, { useState } from "react";
import '../styles-sheets/TareaFormulario.css'
function TareaFormulario (props) {   
	const [input,setInput] = useState('');

	const manejarCambio = e =>{
		setInput(e.target.value);
		console.log(e.target.value)
	};
	const manejarEnvio = e => {
		e.preventDefault();
		const tareaNueva = {
			id: '34545',
			texto:'arroz'
		}
	};
  
	return(
		<form className="tarea-formulario"
		onSubmit={manejarEnvio}>
			<input className="tarea-input"
			type='text'
			placeholder="escribe una Tarea"
			name="texto"
			onChange={manejarCambio}/>
			<button className="tarea-boton"> 
				Agregar Tarea
			</button>
		</form>
  )
}

export default TareaFormulario; 