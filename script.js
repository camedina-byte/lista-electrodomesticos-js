// ======================= VARIABLES GLOBALES =======================
const form = document.getElementById('product-form');
const nameInput = document.getElementById('product-name');
const qtyInput = document.getElementById('product-qty');
const errorMessage = document.getElementById('error-message');
const productList = document.getElementById('product-list');
const countTotal = document.getElementById('count-total');
const countDone = document.getElementById('count-done');
const countPending = document.getElementById('count-pending');

let productos = []; // Lista principal

// ======================= FUNCIONES REUTILIZABLES =======================

// Esta función actualiza los contadores cada vez que se agrega, elimina o marca un producto

function actualizarContadores() {
    const total = productos.length;
    const comprados = productos.filter(p => p.comprado).length;
    const pendientes = total - comprados;

    countTotal.textContent = total;
    countDone.textContent = comprados;
    countPending.textContent = pendientes;
}

// Guarda en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Crea el elemento visual del producto
function crearElementoProducto(producto, index) {
    const li = document.createElement('li');
    li.className = 'producto-item';
    if (producto.comprado) li.classList.add('comprado');

    li.innerHTML = `
        <span>${producto.nombre} (${producto.cantidad})</span>
        <button onclick="marcarComoComprado(${index})">✔</button>
        <button onclick="eliminarProducto(${index})">🗑</button>
    `;

    productList.appendChild(li);
}

// Renderiza toda la lista
function renderizarLista() {
    productList.innerHTML = '';
    productos.forEach((producto, index) => {
        crearElementoProducto(producto, index);
    });
    actualizarContadores();
}

// ======================= FUNCIONES =======================

// Agrega producto
function agregarProducto(e) {
    e.preventDefault();
    const nombre = nameInput.value.trim();
    const cantidad = parseInt(qtyInput.value);

    // Validación
    if (nombre === '' || isNaN(cantidad) || cantidad <= 0) {
        errorMessage.textContent = 'Por favor ingresa un nombre válido y cantidad mayor a cero.';
        return;
    }

    // Validación adicional: nombre mínimo de 3 caracteres
    if (nombre.length < 3) {
        errorMessage.textContent = 'El nombre debe tener al menos 3 caracteres.';
        return;
    }

    errorMessage.textContent = '';

    const nuevoProducto = {
        nombre,
        cantidad,
        comprado: false
    };

    productos.push(nuevoProducto);

    // Guardo la lista en localStorage para que no se borre al recargar

    guardarEnLocalStorage();
    renderizarLista();
    form.reset();
}

// Marcar como comprado

function marcarComoComprado(index) {
    productos[index].comprado = !productos[index].comprado;
    guardarEnLocalStorage();
    renderizarLista();
}

// Eliminar producto
function eliminarProducto(index) {
    productos.splice(index, 1);
    guardarEnLocalStorage();
    renderizarLista();
}

// ======================= INICIALIZACIÓN =======================

// Cargar desde localStorage al iniciar
window.addEventListener('DOMContentLoaded', () => {
    const datosGuardados = localStorage.getItem('productos');
    if (datosGuardados) {
        productos = JSON.parse(datosGuardados);
        renderizarLista();
    }
});

// Escuchar envío del formulario
form.addEventListener('submit', agregarProducto);