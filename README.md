# Pokedex - BackEnd
Aplicación BackEnd para gestionar y proporcionar datos a la Pokédex.

## Contenido
- [Sobre el Proyecto](#sobre-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Despliegue](#Despliegue)

## Sobre el Proyecto

Este BackEnd sirve como proveedor de datos para la Pokédex, permite consultar información detallada sobre diferentes Pokémon. Maneja la conexión a una base de datos, así como la lógica de negocio necesaria para responder a las solicitudes realizadas por el FrontEnd.

## Tecnologías Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## Estructura del Proyecto

```plaintext
pokedex_back/
├── .vscode/                 # Configuración del entorno de desarrollo
├── node_modules/           # Dependencias del proyecto
├── src/                    # Código fuente principal
│   ├── Controllers/       # Controladores de la aplicación
│   │   └── pokemons.controller.js
│   ├── Data/              # Configuración de base de datos
│   │   └── connectionDB.js
│   ├── Models/            # Modelos de datos
│   │   ├── SearchPokemon.model.js
│   │   └── pokemons.model.js
│   ├── Routes/            # Definición de rutas
│   │   └── pokemons.routes.js
│   ├── Services/          # Lógica de negocio
│   │   ├── pokemons.service.js
│   │   └── StartupService.js
│   ├── app.js             # Configuración principal de la aplicación
│   └── index.js           # Punto de entrada
├── .gitignore              # Archivos y carpetas ignorados por Git
├── package.json            # Dependencias y scripts del proyecto
├── package-lock.json       # Versión exacta de dependencias
└── README.md               # Documentación
```

## Instalación y Configuración

### Prerrequisitos

- Node.js y npm instalados en tu sistema. Puedes descargarlos desde [Node.js](https://nodejs.org/).
- MongoDB instalado y funcionando en tu sistema o accesible desde una instancia remota.

### Pasos para instalar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Gravy7w7/Pokedex_FRONT.git
   cd pokedex-backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura la base de datos:
   - Asegúrate de que el archivo `connectionDB.js` contenga la configuración adecuada para conectar a tu base de datos MongoDB.

4. Inicia el servidor:
   ```bash
   npm start
   ```
   Esto iniciará el servidor en `http://localhost:5000` por defecto.

## Despliegue

El proyecto se encuentra en línea, puede acceder a él a partir del siguiente enlance.
[Pokedex](http://pokedex.zapto.org/)

El enlace debe ser exclusivamente http debido a que no tiene el certificado de SSL



