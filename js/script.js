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

/*
De volgende oefening simuleert een lottotrekking, 
waarbij de gebruiker de kans krijgt zijn winnende nummers in te geven 
via de daartoe voorziene inputvelden.

Na de keuze klik je op de knop trekking en zie je de lottocijfers, welke random worden gekozen. 
De nummers die overeenkomen met je keuze krijgen een andere achtergrondkleur.

Werk deze toepassing uit en zorg voor de correcte foutmeldingen wanneer :
- De gebruiker geen geldige nummers ingeeft (tussen 0 en 44).
- De gebruiker lege velden laat in zijn combinatie
Zorg er tevens voor dat de getrokken lottocijfers verschillend zijn, 
door hiervoor een correct algoritme te bedenken.
*/