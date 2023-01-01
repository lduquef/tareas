import React , {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../styles-sheets/ListaDeTareas.css';
function ListaDeTareas() {

	const [tareas,setTareas] = useState([]);
	const agregarTarea = tarea => {
		// tarea es un objeto , por ende se puede acceder al atributo texto
		// trim() permite eliminar los espacios al inicio y al final del texto
		if (tarea.texto.trim()) {
			tarea.texto=tarea.texto.trim();
			const tareasActualizadas = [tarea,...tareas];
			setTareas(tareasActualizadas)
		}
	}

  return (
	<>
	<TareaFormulario onSubmit = {agregarTarea}/>
	<div className='tareas-lista-contenedor'>
		{
			tareas.map( (tarea) => 
			<Tarea
				key={tarea.id}
				id={tarea.id}
				texto={tarea.texto}
				completada={tarea.completada}
			/>
			)
		}
	</div>
	</>
  );
}
export default ListaDeTareas