# Catálogo de Productos - Desafío Frontend Senior (Web)

## Descripción del Proyecto

Este proyecto es una aplicación web de catálogo de productos desarrollada como parte de un desafío técnico para la posición de Frontend Senior. La aplicación permite a los usuarios buscar productos, ver un listado de resultados, y acceder a detalles específicos de cada producto.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) (con App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/) (librería de componentes UI)
- [React Query](https://tanstack.com/query/latest) (para manejo de estado y paginación)
- [JSON Server](https://github.com/typicode/json-server) (para simular la API de productos en desarrollo local)

## Características Implementadas

### Página de Listado de Productos (PLP)

- Ruta: `/`
- Búsqueda de productos por SKU o nombre con debounce de 500ms
- Loader durante la búsqueda
- Visualización de información básica del producto (SKU, categoría, marca, precio)
- Botón "Ver Detalle" para cada producto
- Paginación con scroll infinito manteniendo los valores iniciales del SSR

### Página de Detalle de Producto (PDP)

- Ruta: `/products/:sku`
- Loader durante la carga de información
- Visualización detallada del producto:
  - Nombre
  - Código SKU
  - Foto principal
  - Categoría
  - Marca
  - Precio
  - Especificaciones
- Manejo de errores:
  - Mensaje "No encontrado" para error 404
  - Mensaje "No se pudo cargar" para error 500

## Instalación y Uso

1. Clonar el repositorio:
   ```
   git clone https://github.com/alePapaluca30/challenge-catalog.git
   cd challenge-catalog

   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Iniciar el servidor de desarrollo y el mock de la API:
   ```
   npm run dev
   ```
   Este comando iniciará tanto el servidor de desarrollo de Next.js como el JSON Server para simular la API.

5. Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver la aplicación.

## Backend

El backend de esta aplicación está alojado en un repositorio separado y desplegado en Render. La URL del backend en producción es:

[https://challenge-back-catalog.onrender.com](https://challenge-back-catalog.onrender.com)

Para más detalles sobre el backend, por favor consulta el README en el repositorio correspondiente.

[https://github.com/alePapaluca30/challenge-catalog](https://github.com/alePapaluca30/challenge-catalog)


## Despliegue

La aplicación frontend está desplegada en Vercel y se puede acceder en: [https://challenge-catalog-git-main-alejandras-projects-def16140.vercel.app/]

## Consideraciones Adicionales

- La aplicación utiliza Server-Side Rendering (SSR) para la carga inicial de datos, mejorando el SEO y el rendimiento.
- Se implementó un manejo robusto de errores tanto en el cliente como en el servidor.
- La interfaz es totalmente responsiva, adaptándose a diferentes tamaños de pantalla.
- En desarrollo local, se utiliza JSON Server para simular la API, mientras que en producción se conecta al backend real alojado en Render.

## Autor

Alejandra Elizabeth Papaluca

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.