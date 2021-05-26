const lista = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"];

let shuffle = ()=>{
    lista.sort((a,b)=>0.5-Math.random());
}

let revelarSecreto = (evento, secreto) => {
    console.log(secreto);
    cons
    if (evento.target.value == secreto) {
        alert("HAS GANADO");
      } else {
        alert("SIGUE JUGANDO");
      }
};

let generarBotonera = secreto => {
  let botonera = document.querySelector(".botonera");
  shu
  ffle();
  lista.forEach(elemento => {
    let boton = document.createElement("button");
    boton.value = elemento;
    boton.textContent = "adivina";
    boton.addEventListener("click", evento => revelarSecreto(evento, secreto));
    botonera.appendChild(boton);
  });
};
let generarSecreto = () => {
  let indexSecreto = Math.floor(Math.random() * lista.length);
  return lista[indexSecreto];
};

let generarMensajeInicio = contenedor => {
  secreto = generarSecreto();
  contenedor.textContent = `Dónde está ${secreto}`;
  return secreto;
};

// let comprobarSecreto = (evento, secreto) => {
//   if (evento.target.value == secreto) {
//     alert("HAS GANADO");
//   } else {
//     alert("SIGUE JUGANDO");
//   }
// };

let init = () => {
  let mensajeria = document.querySelector(".mensajeria");
  let secreto =  generarMensajeInicio(mensajeria);
  generarBotonera(secreto);
};

window.addEventListener("load", init);
