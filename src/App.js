
import './App.css';
import logo from './imagenes/freecodecamp-logo.png'
import Tarea from './componentes/Tarea';
import './styles-sheets/Tarea.css'


function App() {
  return (
    <div className= 'aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={logo} 
          className='freecodecamp-logo'
          alt=""/>
      </div>
      <div className='tareas-lista-principal'>
        <h1> Mis Tareas</h1>
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App ;
