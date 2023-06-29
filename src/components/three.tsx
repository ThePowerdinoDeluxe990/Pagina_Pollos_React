export default function Tercero(){
    let chicked:HTMLAudioElement = new Audio("chicken.mp3")
    const Clicked =()=>{
        chicked.play()
    }
    return(
        <div className="compBox">
                <h1 className="Orig">La Gallina del Zelda</h1>
                
                <img alt="Gallina" onClick={Clicked} src="images/Cucco.png"></img>
                
                    <p className="paragraf">
                    La gallina del Zelda,si la atacas te mueres 😨.
                    </p>
                    <br></br>
                <h1 className="Orig">Demostracion</h1>
                    <img alt="Gallina" onClick={Clicked} src="images/atake.jpg"></img>
                <p className="paragraf">Aquí se ve su habilidad</p>
                    <br></br>
                <h1 className="Orig">Su otra utilidad</h1>
                    <img alt="Gallina" onClick={Clicked} src="images/flyingzelda.jpg"></img>
                    <br></br>
                <p className="paragraf">
                    Tambien puedes volar con estos
                </p>

        </div>
    )
}