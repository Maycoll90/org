import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../campoTexto/campoTexto.js"
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";


const Formulario = (props) => {

    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFoto] = useState("")
    const[equipo, actualizarEquipo] = useState("")

    const[titulo, actualizarTitulo] = useState("")
    const[color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const mnejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={mnejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre"  placeholder="Ingresa tu nombre" required 
            valor={nombre} actualizarValor={actualizarNombre}/>

            <CampoTexto titulo="Puesto"  placeholder="Ingresa tu puesto" required 
            valor={puesto} actualizarValor={actualizarPuesto}  />
            
            <CampoTexto titulo="Foto"  placeholder="Ingresa tu foto" required 
            valor={foto} actualizarValor={actualizarFoto} />

            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />

            <Boton texto="Crear" />
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <CampoTexto titulo="Titulo"  placeholder="Ingresa tu titulo" required 
            valor={titulo} actualizarValor={actualizarTitulo}/>

            <CampoTexto titulo="Color"  placeholder="Ingreasar el colar HX" required 
            valor={color} actualizarValor={actualizarColor} type="color" />

            <Boton texto="Registrar equipo"  />
        </form>
    </section>
}

export default Formulario 