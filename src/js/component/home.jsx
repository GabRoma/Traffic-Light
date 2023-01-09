import React, {useState} from "react"; //1. importar el hook useState

//use state = usar estado;

//create your first component
const Home = () => {

   const [color1,setColor1]= useState("");
   const [color2, setColor2]= useState("");
   const [color3, setColor3]= useState("");

	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
		}else{
		setColor1("btn-danger")
		setColor2("")
		setColor3("")
	}
}
function encenderAmarillo() {

	if(color2 === "btn-warning"){
		setColor2("")
	}else{
	setColor2("btn-warning")
	setColor1("")
	setColor3("")
}
}
function encenderVerde() {

	if(color3 === "btn-success"){
		setColor3("")
	}else{
	setColor3("btn-success")
	setColor1("")
	setColor2("")
}
}
function alternar(){
	if(color1 === "btn-danger"){
		setColor1("")
		setColor2("")
		setColor3("btn-success")
	}
	else if(color2 === "btn-warning"){
		setColor1("btn-danger")
		setColor2("")
		setColor3("")
	}
	else if(color3 === "btn-success"){
		setColor1("")
		setColor2("btn-warning")
		setColor3("")
	}else{
		setColor1("btn-danger")
		setColor2("")
		setColor3("")
	}
}
function celeste(){
	if(color1 === "btn-info"){
		setColor1("")
		setColor2("")
		setColor3("")
	}else{
	setColor1("btn-info")
	setColor2("btn-info")
	setColor3("btn-info")
	}
}
function info(){
	alert("La letra del ejercicio pedía como bonus un botón que agregara al semáforo el color púrpura, pero por más que busqué no supe cómo hacer uso de ese color. Mientras sigo intentando descubrirlo, les dejo un botón que lo hace celeste :)")
}

	return (
		<>
		<div className="container d-flex justify-content-center">
			<div className="bg-dark" style={{height:100, width:5}}></div>
		</div>
		<div className="container d-flex justify-content-center">
		<div className="card text-center d-flex flex-column bg-dark" style={{height:220, width:75}}>
			<button className={"w-100 h-100 border-white rounded-circle btn "+color1} onClick={encenderRojo}></button>
			<button className={"w-100 h-100 border-white rounded-circle btn "+color2} onClick={encenderAmarillo}></button>
			<button className={"w-100 h-100 border-white rounded-circle btn "+color3} onClick={encenderVerde}></button>
		</div>
		</div>
		<br></br>
		<div className="container d-flex justify-content-center">
			<button className="btn btn-white border-dark rounded" onClick={alternar}>Alternar</button>
		</div>
		<div className="container d-flex justify-content-center">
			<button className="btn btn-info border-dark rounded" onClick={celeste}>Celeste</button>
		</div>
		<div className="container d-flex justify-content-center">
			<button className="btn btn-light border-dark rounded" onClick={info}>Info</button>
		</div>
		</>
	);

};

export default Home;
