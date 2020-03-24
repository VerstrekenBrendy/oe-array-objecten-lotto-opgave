"use strickt";

var btnBevestig;
var divResponse;

window.addEventListener('load', Initieer);

function Initieer() {
	KoppelElementen();
	KoppelEvents();
	VulStandaardwaarden();
};

const KoppelElementen = () => {
	btnBevestig = document.getElementById("btnBevestig");
	divResponse = document.getElementById("divResponse");
}

const KoppelEvents = () => {
	//btnBevestig.addEventListener('click', VoerFunctionUit);
}

const VulStandaardwaarden = () =>  {

}