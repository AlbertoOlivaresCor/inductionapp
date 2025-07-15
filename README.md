# InductionApp

Aplicación Node.js para la gestión de cursos, profesores y salas usando archivos JSON como base de datos. Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) sobre los recursos principales.

## Requisitos

- Node.js (v18 o superior recomendado)


## Instalación

1. Clona el repositorio o copia la carpeta `inductionapp` en tu máquina.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias ejecutando:
   ```
   npm install express pg dotenv jsonwebtoken bcryptjs 
   npm install -D nodemon
   npm install -g firebase-tools 
   ```

Las dependencias principales usadas en el proyecto son:

- **express**: Framework para crear el servidor y definir rutas.
- **nodemon** (opcional, para desarrollo): Reinicia automáticamente el servidor al detectar cambios.

## Ejecución

1. Inicia el servidor con:
   ```
    "dev": "nodemon server.js",
    "start": "node server.js"
   ```
2. El servidor estará disponible en `http://localhost:3000` (puedes cambiar el puerto en `server.js`).

## Endpoints principales

### Profesores
- `GET /profesores` — Lista todos los profesores
- `POST /profesores` — Crea un nuevo profesor
- `PUT /profesores/:id` — Actualiza un profesor existente
- `DELETE /profesores/:id` — Elimina un profesor

### Cursos
- `GET /cursos` — Lista todos los cursos
- `POST /cursos` — Crea un nuevo curso
- `PUT /cursos/:id` — Actualiza un curso existente
- `DELETE /cursos/:id` — Elimina un curso

### Salas
- `GET /salas` — Lista todas las salas
- `POST /salas` — Crea una nueva sala
- `PUT /salas/:id` — Actualiza una sala existente
- `DELETE /salas/:id` — Elimina una sala

## Ejemplo de uso en Thunder Client

Crear un profesor:
```
POST http://localhost:3000/profesores "Content-Type: application/json" '{
    "id": 2,
    "nombre": "Catalina Ortiz",
    "email": "caortiz@gmail.com",
    "carga_horaria": 44
  }'
```

Listar profesores:
```
GET http://localhost:3000/profesores
```

Actualizar un profesor:
```
PUT http://localhost:3000/profesores/:id "Content-Type: application/json" '{
    "id": 2,
    "nombre": "Catalina Ortiz",
    "email": "caortiz@gmail.com",
    "carga_horaria": 44
  }'
```

Eliminar un profesor:
```
DELETE http://localhost:3000/profesores/:id
```

## Explicación del código y proceso de creación

El proyecto está organizado siguiendo buenas prácticas de Node.js y Express, separando la lógica en carpetas específicas:

- **models/**: Aquí se encuentran los modelos que gestionan la lógica de acceso y manipulación de los datos (por ejemplo, `profesor.model.js`). Cada modelo contiene funciones para crear, leer, actualizar y eliminar registros en la base de datos (que en este caso es un archivo JSON).
- **controllers/**: Los controladores reciben las peticiones HTTP, validan los datos y llaman a los métodos de los modelos para realizar las operaciones necesarias.
- **routes/**: Define las rutas de la API, conectando las URLs con los controladores correspondientes.
- **database/**: Contiene la configuración y funciones para leer y escribir en el archivo JSON que actúa como base de datos.
- **middlewares/**: Aquí puedes agregar funciones intermedias para validación, autenticación, etc.

### Proceso de creación paso a paso

1. Se creó la estructura de carpetas para separar la lógica de modelos, controladores y rutas.
2. Se implementaron los modelos para cada entidad (`profesor`, `curso`, `sala`), permitiendo operaciones CRUD sobre los datos almacenados en JSON.
3. Se desarrollaron los controladores para manejar las peticiones y respuestas HTTP.
4. Se definieron las rutas en archivos separados para cada recurso, facilitando la escalabilidad y el mantenimiento.
5. Se configuró el servidor principal en `server.js` para levantar la API y conectar todas las partes.

Cada archivo está comentado para facilitar la comprensión del flujo de datos y la funcionalidad de cada método. Si tienes dudas sobre cómo funciona alguna parte, revisa los comentarios en los archivos dentro de `models`, `controllers` y `routes`.
