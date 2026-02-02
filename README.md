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

- **HTML** → estructura semántica
- **CSS** → diseño tipo card, Flexbox, estilos hover y focus
- **JavaScript** → lógica de la aplicación, manejo del DOM, validaciones y localStorage
- **GitHub** → control de versiones y publicación del proyecto

---

## Funcionalidades 

### Agregar productos
El usuario puede ingresar el nombre y la cantidad. Se valida que:
- Los campos no estén vacíos
- La cantidad sea mayor a cero
- El nombre tenga mínimo 3 caracteres

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
## Estructura del proyecto
```
lista-electrodomesticos-js/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño
├── script.js           # Lógica de la aplicación
├── README.md           # Documentación del proyecto
└── .gitignore          # Archivos a ignorar en Git
```
---
## Cómo usar la aplicación

1. Abre `index.html` en tu navegador
2. Escribe el nombre del electrodoméstico (mínimo 3 caracteres)
3. Ingresa la cantidad (número mayor a 0)
4. Haz clic en **Agregar**
5. Usa el botón ✔ para marcar como comprado
6. Usa el botón 🗑 para eliminar productos
7. La lista se guarda automáticamente en localStorage

---
## Uso de IA

Utilicé IA como apoyo para:

- Resolver dudas sobre Git, control de versiones y .gitignore
- Implementar mejores prácticas en JavaScript (event listeners, manejo de errores)
- Mejorar la estructura del HTML, CSS y JavaScript
- Aprender sobre accesibilidad web con aria-labels

## Autor

**Carlos Medina Alvarado**  
Estudiante de Ingeniería en Sistemas Inteligentes - Universidad ECOTEC  
Proyecto de Programación Web
