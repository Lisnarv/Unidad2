 Instalación y Configuración

1 Creación del Proyecto

   Instalar Express Generator de forma global:

   npm install -g express-generator

2 Generar el proyecto sin vistas:

   express Unidad2 --no-view
   npm install

3 Configuración de la Base de Datos
  
  Se utilizó MongoDB como base de datos. Para conectarse a la base, se empleó Mongoose. En el archivo app.js se agregó la siguiente configuración:

  const mongoose = require('mongoose');

   mongoose.connect('mongodb://127.0.0.1:27017/Unidad2')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

Nota: Se utilizó 127.0.0.1 en lugar de localhost para evitar conflictos con IPv6.

    Instrucciones de Uso:

1 Arranque del Sistema
Verificar MongoDB: Asegúrate de que MongoDB esté corriendo. Si es necesario, arráncalo manualmente:

  mongod --dbpath "C:\data\db"
   o inicia el servicio desde services.msc en Windows.
   pero en terminos generales al poner en funcionamiento el servidor, mongod deberia correr (npm run start)

Iniciar el Servidor Node.js:

En el directorio del proyecto, ejecutar:

npm start
Esto ejecutará el script configurado en package.json (generalmente node ./bin/www).

2 Uso de la API con Thunder Client y Navegador

 1. GET /items
 Método: GET
 URL de ejemplo: http://127.0.0.1:3000/items
 Body: No se envía body en una petición GET.
 Descripción: Retorna la lista de todos los items.

 2. GET /items/:id
 Método: GET
 URL de ejemplo: http://127.0.0.1:3000/items/641f07b193f64d41d8b19e5e
 Body: No se envía body.
 Descripción: Retorna un item específico según el id provisto en la URL.

 3. POST /items
 Método: POST
 URL de ejemplo: http://127.0.0.1:3000/items
 Body (JSON): Debe incluir los campos que tu modelo espera (por ejemplo, name y description).
 {
  "name": "primer item",
  "description": "Descripción Ejemplo"
 }
 Descripción: Crea un nuevo item en la base de datos y retorna el objeto creado.

 4. PUT /items/:id
 Método: PUT
 URL de ejemplo: http://127.0.0.1:3000/items/641f07b193f64d41d8b19e5e
 Body (JSON): Contiene los campos que quieras actualizar.
 {
  "name": "Nuevo nombre",
  "description": "Nueva descripción"
 }
Descripción: Actualiza un item existente según el id en la URL y retorna el objeto actualizado.

 5. DELETE /items/:id
 Método: DELETE
 URL de ejemplo: http://127.0.0.1:3000/items/641f07b193f64d41d8b19e5e
 Body: No se envía body.
 Descripción: Elimina un item específico según el id provisto en la URL.

 6. GET /items/search (Endpoint Adicional)
 Método: GET
 URL de ejemplo (con query param):
 http://127.0.0.1:3000/items/search?name=numero 2
 Body: No se envía body en un GET.
 Descripción: Retorna los items que cumplan el criterio de búsqueda. 
 En tu controlador, usualmente tomas req.query.name para filtrar.
 
 7. PUT /items/bulk-update (Endpoint Adicional)
 Método: PUT
 URL de ejemplo: http://127.0.0.1:3000/items/bulk-update
 Body (JSON): Este endpoint suele requerir dos objetos: filter y update.
 {
  "filter": {
    "description": "numero 2"
  },
  "update": {
    "description": "numero 3"
  }
 }
    filter: criterio de búsqueda para seleccionar qué documentos actualizar.
    update: campos que deseas modificar en los documentos que cumplan el filtro.
 
 Descripción: Actualiza múltiples items a la vez según el filtro y retorna el resultado de la operación

 8. DELETE /items/delete-all (Endpoint Adicional)
 Método: DELETE
 URL de ejemplo: http://127.0.0.1:3000/items/delete-all
 Body: No se envía body.
 Descripción: Elimina todos los items de la colección. Retorna un mensaje o el resultado de la operación (deletedCount, etc.).





