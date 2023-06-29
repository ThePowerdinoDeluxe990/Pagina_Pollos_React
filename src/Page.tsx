import "./styles/styles.css"
import {useState} from "react";

import First from "./components/First"
import Seco from "./components/Two"
import Tercero from "./components/three";

export default function Page() {
  const [estado, setEstado]= useState("primero")

  return (
    <div>
      <div className="bar">
        <p className="title">Mejores Gallinas de los videojuegos</p>
      </div>

      <div className="bar">
          <button className="barbut" onClick={()=> setEstado("primero")}>Gallina CS</button>
          <button className="barbut" onClick={()=> setEstado("segundo")}>Gallina del Fort</button>
          <button className="barbut" onClick={()=> setEstado("tercero")}>Gallina del Zelda</button>
      </div>  
      
    <div >
      {estado === "primero" && <First/>}
      {estado === "segundo" && <Seco/>}
      {estado === "tercero" && <Tercero/>}
    </div>
      

    </div>
  )
}