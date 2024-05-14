# Movie App Frontend
Este proyecto es la parte del frontend de una aplicación web Full Stack MERN para ver información sobre películas. Está construido con React y utiliza la API de TMDB para obtener la informaión. 

La otra parte del proyecto es una API REST, con la también nos conectamos, que enlaza a una base de datos MongoDB para guardar un listado de tus películas favoritas. Te dejo el repositorio https://github.com/AdrianTerciado/MoviesWeb-ExpressMongo

![Captura de pantalla 2024-05-14 053642](https://github.com/AdrianTerciado/MoviesWeb-React/assets/158854133/1e88ca7f-4327-42bb-9797-2ac659ea1818)

## Características
Es una aplicación muy sencilla, he buscado que la maquetación este bien cuidada pero que a la vez sea minimanilista.

Formas de búsqueda:
- Por palabras clave: Tiene un input con un debouncer de 1 seg para no recargar de llamadas al servidor.
- Filtro por género: Simple, un select donde puedes hacer una llamada a la API y te trae películas por género.
- El proyecto es didactico y sencillo pero perfectamente escalable, se le podrían añadir multitud de filtros u opciones de reordenación. Si tienes alguna propuesta de mejora, no dudes en lanzar un pull request.
- Una vez pulsamos sobre cualquier pelicula nos manda a una vista de detalle donde podemos visualizar los características más reseñables de las películas, también tenemos un botón para marcar esa película como favorita.

![Captura de pantalla 2024-05-14 061145](https://github.com/AdrianTerciado/MoviesWeb-React/assets/158854133/704314b9-d636-44a7-94cb-e33276964d88)


- También tenemos un apartado de favoritos donde podemos ver el listado de nuestras películas, aquellas que hemos ido marcando como tal y que hemos ido guardando en la base de datos a través del backend.
- Además se ha añadido paginación tanto desde el front para paginar lo que viene de la API de TMDB como desde el back para lo que traemos de nuestra propia base de datos. 

![image](https://github.com/AdrianTerciado/MoviesWeb-React/assets/158854133/27989461-25c3-4e25-99d4-aedd10b7a2f8)

- Como veis es una interfaz intuitiva y amigable para el usuario. Se ha tratado de que sea responsive para que se adapte tanto a pantallas mobiles como a PC.

![Captura de pantalla 2024-05-14 061221](https://github.com/AdrianTerciado/MoviesWeb-React/assets/158854133/d619d678-ba97-47d8-95fc-f2c65d526a36)


## Instalación
- Clona este repositorio en tu máquina local.
- Navega hasta la carpeta del proyecto.
- Ejecuta npm install para instalar todas las dependencias.
- ¡Recuerda! Necesitas obtener una clave de la web https://www.themoviedb.org/en para ponerla en el archivo .env 
- ¡Recuerda de nuevo! Si quieres que funcione el guardado de favoritos, necesitas hacer funucionar también la parte del backend. 
- Ejecuta "npm run dev" para iniciar la aplicación en modo de desarrollo.
- Abre http://localhost:5173 para ver la aplicación en tu navegador.

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
