# Movie App Frontend
Este proyecto es la parte del frontend de una aplicación web para ver información sobre películas. Está construido con React y utiliza la API de TMDB para obtener la informaión. Además he construido en otro proyecto otra API REST, con la también nos conectamos, que conecta con una base de datos MongoDB para guardar un listado de tus películas favoritas.

## Características
Es una aplicación muy sencilloa, he buscado que la maquetación este bien cuidada pero que a la vez sea minimanilista.
Formas de búsqueda:
- Por palabras clave: Tiene un input con un debouncer de 1 seg para no recargar de llamadas al servidor.
- Filtro por género: Simple, un select donde puedes hacer una llamada a la API y te trae películas por género.
- El proyecto es didactico y sencillo pero perfectamente escalable, se le podrían añadir multitud de filtros u opciones de reordenación. Si tienes alguna propuesta de mejora, no dudes en lanzar un pull request.
- Una vez pulsamos sobre cualquier pelicula nos manda a una vista de detalle donde podemos visualización los detalles más reseñables de las películas, también tenemos un botón para marcar esa película como favorita.
- Por último tenemos un apartado de favoritos donde podemos ver el listado de nuestras películas, aquellas que hemos ido marcando como tal.
- Como veis es una interfaz intuitiva y amigable para el usuario.

## Instalación
Clona este repositorio en tu máquina local.
Navega hasta la carpeta del proyecto.
Ejecuta npm install para instalar todas las dependencias.
¡Recuerda! Necesitas obtener una clave de la web https://www.themoviedb.org/en para ponerla en el archivo .env 
¡Recuerda de nuevo! Si quieres que funcione el guardado de favoritos, necesitas hacer funucionar también la parte del backend, te dejo el otro repo, echale un vistazo https://github.com/AdrianTerciado/MoviesWeb-ExpressMongo
Ejecuta "npm run dev" para iniciar la aplicación en modo de desarrollo.
Abre http://localhost:5173 para ver la aplicación en tu navegador.

## Tecnologías Utilizadas
- NodeJS como entorno de desarrollo
- Vite
- React
- SASS
- React Router
- Axios (para hacer peticiones a las API)

Contribuir
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Realiza un fork del proyecto.
1. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
2. Realiza tus cambios y haz commits (git commit -m 'Añade nueva funcionalidad').
3. Sube tus cambios a la rama 
4. Abre un Pull Request.
