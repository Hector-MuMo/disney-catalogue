# 💻 Prueba Técnica – React App Disney World Catalogue 
## 🎯 Objetivo
Desarrollar una aplicación web en React que consuma la API pública de Disney y presente un catálogo de personajes con funcionalidad básica de autenticación simulada y favoritos.

## 📋 Requerimientos funcionales (Prioridad Alta)

### 1. Rutas y navegación (React Router)
Se deben implementar **3 rutas principales**:

- Implementación de navbar con enlaces a las rutas principales. Debe contener el nombre de la aplicación (Disney World Catalogue) y
  - `/` – Página principal.
  - `/favorites` – Favoritos.
  - `/character/:id` – Detalles del personaje (opcional).

- Recuerda que las 3 páginas contienen el navbar, por lo que es necesario utilizar un layout común.

- Implementación de ruta para detalles de personajes (`/character/:id`) (opcional).

- `/` – Página principal  
  - Mostrar lista paginada de **30 personajes** desde la API.  
  - Por cada personaje mostrar:  
    - **Nombre** - El nombre debe ser un enlace a la ruta de detalles del personaje (`/character/:id`).
    - **Imagen**  
    - **Cantidad de películas** en las que ha aparecido.
    - **Cantidad de juegos** en los que ha aparecido.
    - **Cantidad de atracciones** en las que ha aparecido.
  - Implementar paginación con la funcionalidad de la API. (opcional)
  - Botón para **agregar/quitar de favoritos** (estado global con Zustand).
  - Buscador por medio de nombre

- `/favorites` – Favoritos  
  - Mostrar lista de personajes marcados como favoritos (desde Zustand).
  - Cada personaje debe mostrar:  
    - **Nombre** - El nombre debe ser un enlace a la ruta de detalles del personaje (`/character/:id`).  
    - **Imagen**  
  - Botón para **quitar de favoritos**.


### 2. Consumo de API (React Query - opcional)
- Manejo de peticiones con **React Query**.
- Usar **caché** para optimizar la experiencia de usuario.
- Implementar **loading** y **error handling** en las peticiones.

### 3. Diseño responsivo
- Adaptar a diferentes pantallas usando **CSS Grid / Flexbox** con **Tailwind CSS**.


---

## 📋 Requerimientos opcionales (Si hay tiempo)

- Página de detalles (`/character/:id`) con información extra (series, juegos, atracciones, villanos). 
Esta página debe realizar la petición a la API por medio de los parámetros de la URL.
---

## 📌 Notas

El objetivo principal es evaluar:

- Todo el código debe estar escrito en **TypeScript**. El uso de los tipos es obligatorio. 
- Uso correcto de **React Router**.
- Manejo de **estado global** con Zustand.
- Consumo y cacheo de datos con **React Query**.
- Buenas prácticas de organización de componentes, nombre de variables, reutilización de código y **diseño responsivo**.
- Uso de **Tailwind CSS** para el diseño.
- Uso de ShadCn para componentes UI (opcional).

## 📦 Recursos

- [API de Disney](https://disneyapi.dev/)
- [React Router](https://reactrouter.com/)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [React Query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCn](https://ui.shadcn.com/)
- [Iconos](https://lucide.dev/guide/packages/lucide-react)
- [Figma](https://www.figma.com/design/LXNo5Jtw9vChYv9NKaIdXs/Untitled?node-id=0-1&t=XfNP1rVCkS2VwLVP-1)