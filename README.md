# Lista de Electrodomésticos – App Web

Este proyecto es parte de la Actividad Integradora de Programación Web. El objetivo es desarrollar una aplicación tipo lista de supermercado, pero enfocada en electrodomésticos. 

---

## Objetivo del proyecto

Crear una aplicación web que permita:

- Agregar productos con nombre y cantidad
- Mostrar una lista dinámica en pantalla
- Marcar productos como “comprados”
- Eliminar productos de la lista
- Llevar un contador de:
  - Total de productos
  - Comprados
  - Pendientes
- Guardar la información usando **localStorage** para que no se borre al recargar la página

---

- **HTML5** → estructura semántica
- **CSS3** → diseño tipo card, Flexbox, estilos hover y focus
- **JavaScript** → lógica de la aplicación, manejo del DOM, validaciones y localStorage
- **Git y GitHub** → control de versiones y publicación del proyecto

---

## Funcionalidades 

### Agregar productos
El usuario puede ingresar el nombre y la cantidad. Se valida que los campos no estén vacíos y que la cantidad sea mayor a cero.

### Lista dinámica
Cada producto se agrega al DOM sin recargar la página.

### Marcar como comprado
Al presionar el botón ✔, el producto cambia de estilo (tachado, opacidad, color).

### Eliminar productos
Cada producto tiene un botón 🗑 para eliminarlo de la lista.

### Contadores automáticos
La app muestra:
- Total de productos
- Cuántos están comprados
- Cuántos están pendientes

### Persistencia con localStorage
La lista se guarda automáticamente y se recupera al recargar la página.

---

## Cómo usar la aplicación

1. Escribe el nombre del electrodoméstico.
2. Ingresa la cantidad.
3. Haz clic en **Agregar**.
4. Usa los botones ✔ y 🗑 para gestionar cada producto.
5. La lista se guarda sola gracias a localStorage.

---
## Uso de IA

Utilicé IA como apoyo para:

- Resolver dudas sobre Git y SSH
- Mejorar la estructura del HTML, CSS y JavaScript
- Redactar este README de forma clara y ordenada
