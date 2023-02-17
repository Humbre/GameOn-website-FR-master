function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// FERMER LE FORMULAIRE QUAND DONNEES ENVOYEES
modalbg.style.display = "block";

//MESSAGES d'ERREURS : 2 caractères ou plus
function validate(first){
  const input = document.getElementById(first);
  const validityState = input.validity;

  if (validityState.valueMissing){
    input.setCustomValidity ("Vous devez entrer 2 caractères ou plus pour le champ!");
  }
  else{
    input.setCustomValidity ("");
  }

  input.reportValidity();
}
//MESSAGES d'ERREURS : choisir une option 

function validate(inputID){
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing){
    input.setCustomValidity ("Vous devez choisir une option!");
  }
  else{
    input.setCustomValidity ("");
  }

  input.reportValidity();
}
//MESSAGES d'ERREURS : Termes et conditions
function validate(checkbox1){
  const input = document.getElementById(checkbox1);
  const validityState = input.validity;

  if (validityState.valueMissing){
    input.setCustomValidity ("Vous devez cocher les termes et conditions!");
  }
  else{
    input.setCustomValidity ("");
  }

  input.reportValidity();
}
//MESSAGES d'ERREURS : Date de naissance
function validate(birthdate){
  const input = document.getElementById(birthdate);
  const validityState = input.validity;

  if (validityState.valueMissing){
    input.setCustomValidity ("Vous devez entrer votre date de naissance!");
  }
  else{
    input.setCustomValidity ("");
  }

  input.reportValidity();
}

//ENVOYER DONNEES
function sendData(data) {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = "";
  var urlEncodedDataPairs = [];
  var name;

  // Transformez l'objet data en un tableau de paires clé/valeur codées URL.
  for(name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  // Combinez les paires en une seule chaîne de caractères et remplacez tous
  // les espaces codés en % par le caractère'+' ; cela correspond au comportement
  // des soumissions de formulaires de navigateur.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // Définissez ce qui se passe en cas de succès de soumission de données
  XHR.addEventListener('load', function(event) {
    alert('Votre formulaire a été envoyé.');
  });

  // Définissez ce qui arrive en cas d'erreur
  XHR.addEventListener('error', function(event) {
    alert('Oups! Quelque chose s\'est mal passé.');
  });

  // Configurez la requête
  XHR.open('POST', 'https://example.com/cors.php');

  // Ajoutez l'en-tête HTTP requise pour requêtes POST de données de formulaire
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Finalement, envoyez les données.
  XHR.send(urlEncodedData);
}

// FERMER LE FORMULAIRE QUAND DONNEES ENVOYEES
//modalbg.style.display = "block";


//function launchModal() {
 // if (urlEncodedData.send){
   // modalbg.style.display = "block";
 // }
  //else{
   // modalbg.style.display = "block";
 // }
//}

