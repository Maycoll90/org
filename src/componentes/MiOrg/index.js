import { useState } from "react"
import "./MiOrg.css"

const ImagenOrg = (props) => {
    //Estado . hooks
    //useState
    //const [nombreVariable, FuncionActualiza] = useState(ValorInnicial)


    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarclick = () => {
    //    console.log("Scrooll", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostar} />
    </section>
}

export default ImagenOrg