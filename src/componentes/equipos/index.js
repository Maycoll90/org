import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuracion

    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const styloEquipo = { backgroundColor: hexToRgba(colorPrimario, 0.6)}

    const styloTitulo = {borderColor: colorPrimario}

    return <>
    { colaboradores.length > 0 && 
        <section className="equipo" style={styloEquipo}>
            <input
              className="ElegirColor"
              type="color"
              value={colorPrimario}
              onChange={(evento) => {
                actualizarColor(evento.target.value, id)
              }}
            />
            <h3 style={styloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like} />)
                }
            </div>
    </section>
            }</>
}

export default Equipo