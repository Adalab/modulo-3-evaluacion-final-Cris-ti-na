## Módulo 3: Ejercicio de evaluación final

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Usamos React para realizarlo.

![Rick and Morty logo](https://github.com/Adalab/modulo-3-evaluacion-final-Cris-ti-na/blob/master/src/images/rmlogo.png)

### Requisitos

1. Listado de personajes
Usando la API https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, pintamos: foto, nombre y especie.

2. Filtrado de personajes
La segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

3. Componentes del listado de personajes
El listado debe tener, como mínimo, los siguientes componentes:
-Componente para los filtros
-Componente para el listado
-Componente para la tarjeta de cada personaje del listado
-Componente para el detalle de cada personaje

4. Detalle de personajes
Implementamos una funcionalidad para que al hacer clic sobre la tarjeta de un personaje, su información aparezca a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

5. Detallitos de calidad
Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

6. BONUS: Mejoras visuales
Para terminar, podéis realizar mejoras visuales del ejercicio (como mostrar iconos en algunas informaciones o el buen funcionamiento del responsive).

7. BONUS: URL compartible
Como ejercicio extra se propone que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo "El personaje que buscas no existe".

8. BONUS: Ordenación
Otro extra interesante es que se ordene el listado de personajes alfabéticamente por nombre.


### Wubba Lubba Dub Dub!!