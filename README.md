# Proyecto de Autenticación con JWT

Este proyecto es una API para gestionar el inicio de sesión y registro de usuarios, con capacidad para actualizar contraseñas. Utiliza JWT para manejar la autenticación y proteger las rutas.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Express**: Framework de Node.js para manejar las rutas.
- **JWT (JSON Web Token)**: Para la autenticación segura de usuarios.
- **bcryptjs**: Para el hashing y verificación de contraseñas.
- **MySQL**: Base de datos relacional para almacenar los usuarios.
- **Sequelize**: ORM para interactuar con la base de datos MySQL.

## Funcionalidades

1. **Registro de usuario**: Permite a los usuarios registrarse en el sistema.
2. **Inicio de sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña. Si las credenciales son correctas, se genera un token JWT.
3. **Actualización de contraseña**: Los usuarios pueden actualizar su contraseña de manera segura.

## Rutas

### `POST /register`
- **Descripción**: Registra a un nuevo usuario.
- **Cuerpo de la solicitud**:
  ```json
  {
  "nombre":"Arelis Patricia",
    "apellido":"Suarez Barrio",
    "email":"suarez@gmail.com",
    "password":"arelis$13612"
  }
**Resultado de la solicitud**
```json
{
    "message": "Usuario creado",
    "data": "Arelis Patricia",
    "error": null
}
##RUTAS

### `POST /login`
**Descripción** :Iniciar sesión

{
     "email":"suarez@gmail.com",
    "password":"Brayan$13612"
}
**Resultado de la solicitud**
```json
{
    "message": "inicio de sesión exitoso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ2OTc2Nzk4LCJleHAiOjE3NDY5ODAzOTh9.DhIGbQ-B1SQNwcwN4aZYwSlJgcZ9Z4zM7fvvJYbIjRE",
    "success": true
}

### `POST /updatePassword`
**Descripción** : actualizar contraseña para esto ya el usuario ya debe estar registrado en la base de datos si en caso de que no no lo dejará ingresar

{
     "password":"arelis$13612"
}
**Resultado de la solicitud**
{
    "message": "Contraseña actualizada",
    "status": 200,
    "error": null
}
### Instalación
```bash
git clone <url-del-repositorio>
```

### Instala dependencias
```bash
npm install
```

### Configura tu `.env`
```env
HOST=""
DB_NAME=""
USER=""
<!-- PASSWORD="" -->
PORT=
keySecret=""
```

### Inicia el servidor
**Si usas nodemon**:
```bash
nodemon server.js
```
**O con npm**:
```bash
npm start
```