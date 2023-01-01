import React , {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../styles-sheets/ListaDeTareas.css'
function ListaDeTareas() {

	const [tareas,setTareas] = useState([]);
		

  return (
	<>
	<TareaFormulario/>
	<div className='tareas-lista-contenedor'>
			ListaDeTareas
	</div>
	</>
  );
}
export default ListaDeTareas