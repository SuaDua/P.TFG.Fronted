# Frontend - Proyecto Compraventa de Coches

Este es el frontend del proyecto de fin de ciclo, desarrollado con **React**. Se trata de una aplicación web que permite a los usuarios visualizar, filtrar y comparar vehículos de segunda mano, conectándose con una API backend construida con Node.js y MongoDB.

---

## 🚀 Instalación

1. Clona el repositorio (si no lo has hecho aún):

```bash
git clone https://github.com/usuario/proyecto-coches.git
```

2. Entra en la carpeta del frontend:

```bash
cd frontend
```

3. Instala las dependencias necesarias:

```bash
npm install
```

---

## ▶️ Ejecución en modo desarrollo

```bash
npm run dev
```

> Por defecto, se ejecutará en `http://localhost:5173/`

---

## 🔗 Conexión con el Backend

El frontend se comunica con el backend a través de peticiones HTTP (Axios o Fetch). Para ello:

- Asegúrate de que el backend esté ejecutándose en `http://localhost:3000` o la URL que hayas configurado.
- Puedes configurar la URL del backend si usas un archivo `.env` o modificando directamente el archivo de conexión (`Content_API.js`, `auth_API.js`, etc.).

---

## 🗂️ Estructura básica

```
frontend/
│
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React (Filtros, Comparador, etc.)
│   ├── pages/              # Páginas principales
│   ├── api/                # Simulaciones de backend (`Content_API.js`, etc.)
│   ├── App.js              # Componente principal
│   └── index.js            # Punto de entrada
│
├── package.json            # Configuración y scripts de NPM
└── README.md               # Este archivo
```

---

## 🧪 Funcionalidades principales

- 🔍 Filtro por marca, precio, año, provincia, kilometraje
- 📊 Comparador de vehículos
- ❤️ Funcionalidad de favoritos (simulada)
- 🧑‍💻 Autenticación simulada de usuarios
- 📦 Interfaz simple y adaptada a usuarios no técnicos

---

## 👨‍🏫 Notas para los profesores

Este frontend está diseñado como parte del proyecto de segundo de DAW. Las funcionalidades han sido implementadas con React utilizando JavaScript moderno, respetando principios de modularidad y separación de componentes.

