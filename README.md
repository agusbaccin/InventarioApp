Proyecto Gestión de Productos

Descripción
Aplicación full stack para gestionar productos: agregar, editar, eliminar y listar. Incluye backend en Java/Spring Boot y frontend en Angular.

Tecnologías
- Java 11, Spring Boot
- Angular
- MySQL
- Maven
- REST API

Productos de ejemplo
Al iniciar la aplicación se cargan automáticamente 5 productos de ejemplo (Producto 1 a Producto 5). Se puede agregar, editar y eliminar productos sin restricciones.

Estructura del proyecto
InventarioApp/
├── backend/      <-- Código Java/Spring Boot
└── frontend/     <-- Código Angular

Cómo ejecutar

Backend:
1. Asegurarse de tener MySQL instalado y corriendo (puede ser MySQL Workbench o cualquier cliente MySQL).
2. Abrir terminal en la carpeta backend.
3. Ejecutar: mvn spring-boot:run
La aplicación creará automáticamente la base de datos inventario_db y las tablas si no existen.

Frontend:
1. Abrir terminal en la carpeta frontend
2. Ejecutar: npm install
3. Ejecutar: ng serve
4. Abrir en el navegador: http://localhost:4200
