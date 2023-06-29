export default function Seco(){
    let chicked:HTMLAudioElement = new Audio("chicken.mp3")
    const Clicked =()=>{
        chicked.play()
    }
    return(
        <div className="compBox">
                <h1 className="Orig">La Gallina del Fort</h1>
                
                <img alt="Gallina" onClick={Clicked} src="images/fortchicken.jpg"></img>
                
                    <p className="paragraf">
                    La gallina del Fort, una gallina que si la atrapas,<br></br>
                    podras saltar mas alto
                    </p>
                    <br></br>
                <h1 className="Orig">En accion</h1>
                    <img alt="Gallina" onClick={Clicked} src="images/flyingfort.jpg"></img>
                <p className="paragraf">Aquí se ve su habilidad</p>
                    <br></br>
                <h1 className="Orig">Su hermano mayor</h1>
                    <img alt="Gallina" onClick={Clicked} src="images/hermanopollo.jpg"></img>
                    <br></br>
                <p className="paragraf">
                    Aquí se ve a su hermano mayor
                </p>

        </div>
    )
}