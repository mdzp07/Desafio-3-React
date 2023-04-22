import { useState } from 'react'
import { BaseColaboradores } from './components/Basecolaboradores';
import './assets/css/app.css'


function App() {
  const [listaBaseColaboradores, setlistaBaseColaboradores] = useState(BaseColaboradores)
  const [listaFiltrada, setListaFiltrada] = useState(listaBaseColaboradores)
  const [nombreColaborador, setNameColaborador] = useState('')
  const [emailColaborador, setEmailColaborador] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    setListaFiltrada([...listaBaseColaboradores, { nombre: nombreColaborador, correo: emailColaborador }])
    setlistaBaseColaboradores([...listaFiltrada, { nombre: nombreColaborador, correo: emailColaborador }])
  }

  const inputNombre = (e) => { setNameColaborador(e.target.value) }

  const inputEmail = (e) => { setEmailColaborador(e.target.value) }

  const Filtrar = (e) => {

    if (e.target.value === "") {
      setlistaBaseColaboradores(listaFiltrada)
    } else {
      let ColabFiltrados = listaBaseColaboradores.filter(c => c.nombre.includes(e.target.value))
      setlistaBaseColaboradores(ColabFiltrados)
    }
  };

  return (
    <div>
      <div id="formatSearch">
        <h2>Buscar Colaboradores:</h2>
        <input type="text" onChange={(e) => { Filtrar(e) }} />
      </div>
      <div id="containerForm">
        <h1>Lista de Colaboradores</h1>
        <form onSubmit={submitForm}>
          <input className='formatInput' placeholder='Ingrese Nombre' type="text" name="nombreColaborador" onChange={inputNombre} />
          <br />
          <input className='formatInput' placeholder='Ingrese Correo' type="email" name="emailColaborador" onChange={inputEmail} />
          <br />
          <button id="formatButton">Agregar Colaborador</button>
        </form>
      </div>
      <table id="containerList">
        {listaBaseColaboradores.map(colaborador =>
         <tr key={colaborador.nombre}><td>{colaborador.nombre}</td><td>{colaborador.correo}</td></tr>
        )}
      </table>

    </div>
  )
}

export default App;
