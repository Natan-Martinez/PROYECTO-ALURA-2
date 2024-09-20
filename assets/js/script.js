let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];
let editIndex = -1;

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    if (valorGasto >= 100) {
        alert("ESTE GASTO ES DEMASIADO TENLO EN CUENTA.");
    }

    if (editIndex === -1) {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);
    } else {
        listaNombresGastos[editIndex] = nombreGasto;
        listaValoresGastos[editIndex] = valorGasto;
        listaDescripcionesGastos[editIndex] = descripcionGasto;
        editIndex = -1;
        document.getElementById('botonFormulario').textContent = 'Agregar Gasto';
    }
    actualizarListaGastos();
    limpiar();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion];

        htmlLista += `<li>${elemento} - ${descripcionGasto} - USD ${valorGasto.toFixed(2)} 
            <button onclick="editarGasto(${posicion});">EDITAR</button>
            <button onclick="eliminarGasto(${posicion});">ELIMINAR</button>
            </li>`;

        totalGastos += Number(valorGasto);
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    nombreGasto = document.getElementById('nombreGasto').value = '';
    valorGasto = document.getElementById('valorGasto').value = '';
    descripcionGasto = document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];
    document.getElementById('botonFormulario').textContent = 'EDITAR GASTO';
    editIndex = posicion;
}


