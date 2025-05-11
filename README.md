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
    "email": "usuario@dominio.com",
    "password": "contraseña123"
  }
