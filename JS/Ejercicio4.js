let pila = [];

function crearPila() {
    const elementos = document.getElementById('elementosPila').value.trim();
    
    if (elementos === "") {
        document.getElementById('pilaDisplay').textContent = `Por favor, ingrese elementos para la pila.`;
        setTimeout(() => {
            document.getElementById('pilaDisplay').textContent = '';
        }, 5000);
        return;
    }

    const elementosArray = elementos.split(',').map(num => num.trim()).filter(num => !isNaN(num) && num !== "");
    
    if (elementosArray.length === 0) {
        document.getElementById('pilaDisplay').textContent = `Asegúrese de ingresar solo números separados por comas.`;
        setTimeout(() => {
            document.getElementById('pilaDisplay').textContent = '';
        }, 5000);
        return;
    }

    pila = elementosArray.map(Number);
    document.getElementById('pilaDisplay').textContent = `Pila creada: ${pila.join(", ")}`;
}

function reemplazar() {
    const valorViejo = parseInt(document.getElementById('valorViejo').value);
    const valorNuevo = parseInt(document.getElementById('valorNuevo').value);

    if (isNaN(valorViejo) || isNaN(valorNuevo)) {
        document.getElementById('mensaje').textContent = `Por favor, ingrese valores numéricos válidos para reemplazar.`;
        setTimeout(() => {
            document.getElementById('mensaje').textContent = '';
        }, 5000);
        return;
    }

    const pilaModificada = Reemplazar(pila.slice(), valorNuevo, valorViejo);

    document.getElementById('pilaOriginal').textContent = `Pila original: ${pila.join(", ")}`;
    document.getElementById('pilaModificada').textContent = `Pila modificada: ${pilaModificada.join(", ")}`;
    
    setTimeout(() => {
        document.getElementById('pilaOriginal').textContent = '';
        document.getElementById('pilaModificada').textContent = '';
    }, 5000);
}

function Reemplazar(pila, nuevo, viejo) {
    const temp = [];

    while (pila.length > 0) {
        const elemento = pila.pop();
        if (elemento === viejo) {
            temp.push(nuevo);
        } else {
            temp.push(elemento);
        }
    }

    while (temp.length > 0) {
        pila.push(temp.pop());
    }

    return pila;
}
