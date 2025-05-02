let indiceCorrecto, respuestas;
let correctas = 0, intentos = 0;

function nuevaRonda() {
  document.getElementById("resultado").textContent = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";

  const tipo = Math.floor(Math.random() * 3) + 1;
  indiceCorrecto = Math.floor(Math.random() * infinitivo.length);

  let titulo = "";
  let mostrado = "";

  if (tipo === 1) {
    titulo = "Infinitivo";
    mostrado = infinitivo[indiceCorrecto];
    document.getElementById("label1").textContent = "Pasado:";
    document.getElementById("label2").textContent = "Participio:";
    respuestas = [pasado[indiceCorrecto], participio[indiceCorrecto]];
  } else if (tipo === 2) {
    titulo = "Pasado";
    mostrado = pasado[indiceCorrecto];
    document.getElementById("label1").textContent = "Infinitivo:";
    document.getElementById("label2").textContent = "Participio:";
    respuestas = [infinitivo[indiceCorrecto], participio[indiceCorrecto]];
  } else {
    titulo = "Participio";
    mostrado = participio[indiceCorrecto];
    document.getElementById("label1").textContent = "Infinitivo:";
    document.getElementById("label2").textContent = "Pasado:";
    respuestas = [infinitivo[indiceCorrecto], pasado[indiceCorrecto]];
  }

  document.getElementById("titulo").textContent = "Tiempo mostrado: " + titulo;
  document.getElementById("verboMostrado").textContent = mostrado;
}

function verificar() {
  const r1 = document.getElementById("input1").value.trim().toLowerCase();
  const r2 = document.getElementById("input2").value.trim().toLowerCase();

  intentos++;
  const correctasPrevias = correctas;

  if (r1 === respuestas[0].toLowerCase() && r2 === respuestas[1].toLowerCase()) {
    correctas++;
    document.getElementById("resultado").textContent = "¡Correcto!";
    document.getElementById("resultado").className = "correcto";
  } else {
    document.getElementById("resultado").textContent = `Incorrecto. Respuestas correctas: ${respuestas[0]}, ${respuestas[1]}`;
    document.getElementById("resultado").className = "incorrecto";
  }

  document.getElementById("correctas").textContent = correctas;
  document.getElementById("intentos").textContent = intentos;
}

nuevaRonda();
