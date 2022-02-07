import cipher from "./cipher.js";

const buttonCodificar = document.getElementById("codificar");
buttonCodificar.addEventListener("click", function () {//Evento do click
let MsgCod = document.getElementById("MsgCod").value;
let offsetCod = document.getElementById("offsetCod").value;//Offset desloca

let encode = cipher.encode(Number(offsetCod), MsgCod);// Funao codificar

document.getElementById("codResultado").value = encode;
});

const buttonDecodificar = document.getElementById("btnDecodificar");
buttonDecodificar.addEventListener("click", function () {
let MsgDecodificar = document.getElementById("MsgDecodificar").value;
let offsetDeco = document.getElementById("offsetDeco").value;

let decode = cipher.decode(Number(offsetDeco), MsgDecodificar);
document.getElementById("decoResultado").value = decode;
});
