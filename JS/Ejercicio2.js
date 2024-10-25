function palindromo(){
    let palabra = document.getElementById('palabra').value;
    palabra = palabra.toLowerCase().replace(/\s+/g, '');
    return palabra === palabra.split('').reverse().join('');
}

function Verificar(){
    let palabra = document.getElementById('palabra').value;
    const respuestaDiv = document.getElementById('respuesta');

    if (palabra.trim() === "") {
        respuestaDiv.innerHTML = `<h3>No has ingresado ninguna palabra o frase</h3>`;
        setTimeout(() => { respuestaDiv.innerHTML = ""; }, 5000);
        return;
    }

    if (palindromo()) {
        respuestaDiv.innerHTML = `<h3>Es un palíndromo</h3>`;
    } else {
        respuestaDiv.innerHTML = `<h3>No es un palíndromo</h3>`;
    }

    setTimeout(() => { respuestaDiv.innerHTML = ""; }, 5000);
}
