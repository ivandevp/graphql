##### RETO 01
## ERROR AL INGRESAR UN ID INCORRECTO Y NO EXISTENTE

### OBJETIVO
Prevenir el error que ocurre al ingresar un ID erroneo o no existente.

### REQUERIMIENTOS
1. Proyecto con GraphQL API. [Ejemplo 01](../Ejemplo-01).
2. Mongo 4 o superior. [Download](https://www.mongodb.com/download-center/community).

### DESARROLLO
Tu objetivo es lograr que en el caso de que se envíe un ID en un formato erroneo a `ObjectId` dentro de la petición Query `User` o un usuario que no exista dentro de la base de datos, debería mostrar un error de que no se encontro dicho recurso.