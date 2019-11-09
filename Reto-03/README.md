##### RETO 03
## PAGINAR RESULTADOS DE LOS TOURS REGISTRADOS

### OBJETIVO
A través de argumentos, añadir al Query de `Tours` el soporte para paginar un conjunto de datos.

### REQUERIMIENTOS
1. Proyecto con GraphQL API. [Ejemplo 02](../Ejemplo-02).
2. Mongo 4 o superior. [Download](https://www.mongodb.com/download-center/community).

### DESARROLLO
A partir del ejemplo anterior, tendrás que agregar los argumentos `page` y `limit` para paginar los resultados que nos retorna el Query.

#### Bonus
¿Cómo harías para retornar un conjunto de este este tipo?
```js
{
  "metadata": {
    "total": 1000,
    "page": 1,
    "limit": 10,
    "totalPages": 100,
  },
  "data": [...],
}
```