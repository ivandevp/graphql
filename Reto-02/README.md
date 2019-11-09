##### RETO 02
## FILTRAR LOS TOURS A TRAVÉS DEL TIPO DE TOUR

### OBJETIVO
Agregar un argumento al Query `Tours` para obtener estos basados en su tipo.

### REQUERIMIENTOS
1. Proyecto con GraphQL API.  [Ejemplo 01](../Ejemplo-01).
2. Mongo 4 o superior. [Download](https://www.mongodb.com/download-center/community).

### DESARROLLO
1. Este argumento deberá aceptar un valor en `string` ya sea con los valores `GroupType` o `PrivateType`. Recuerda aplicar lo aprendido sobre los argumentos de GraphQL para resolver este ejercicio.

2. Para comprobarlo, tendrás que lanzar la petición al Query de `Tours` y enviarás a través del argumento `Type` cualquiera de los tipos, este a su vez mostrará los `Tours` del tipo que hayas enviado.