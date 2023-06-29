

export default function First(){
    let chicked:HTMLAudioElement = new Audio("chicken.mp3")
    const Clicked =()=>{
        chicked.play()
    }
    return(
        <div className="compBox">
                <h1 className="Orig">La Gallina del Cs</h1>
                
                <img onClick={Clicked} alt="Gallina"src="images/gallina0.jpg"></img>
                
                    <p className="paragraf">
                        La gallina del cs aparece en casi todos los juegos de la saga,<br></br>
                    y es uno de los elementos mas característicos de la saga, aquí    <br></br>
                    unas fotos adonde aparece esta gallina.
                    <br></br>
                    (Aquí aparece en el cs 1.6)
                    </p>
                    <br></br>
                <h1 className="Orig">En el Csgo</h1>
                    <img alt="Gallina" onClick={Clicked}src="images/gallinago.jpg"></img>
                <p className="paragraf">Aquí aparece en csgo</p>
                    <br></br>
                <h1 className="Orig">Version navidad</h1>
                    <img alt="Gallina" onClick={Clicked} src="images/pollonavidad.png"></img>
                    <br></br>
                <p className="paragraf">
                    Version Navideña
                </p>

        </div>
    )
}