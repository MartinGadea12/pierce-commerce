Página de Inicio de Pierce E-commerce

Este proyecto es una página de inicio para un sitio web de e-commerce, construida usando React, TypeScript y CSS para los estilos. Ofrece un diseño limpio y responsivo, enfocado en proporcionar una excelente experiencia de usuario para los clientes que navegan los productos.

Tabla de Contenidos
Características
Tecnologías Usadas
Primeros Pasos
Instalación
Uso
Estructura del Proyecto

Características
Diseño Responsivo: Optimizado tanto para vistas móviles como de escritorio.
Vitrina de Productos: Muestra una cuadrícula con productos destacados.
Navegación Simple: Navegación intuitiva por el sitio.
Estilos con CSS Personalizados: Estilos diseñados específicamente para e-commerce.
TypeScript: Asegura seguridad en el código y claridad.
Tecnologías Usadas
React: Librería de JavaScript para construir interfaces de usuario.
TypeScript: Un superconjunto de JavaScript que agrega tipado estático.
CSS: Para los estilos de los componentes y el diseño.

Primeros Pasos
Para obtener una copia local del proyecto y ejecutarla, sigue los pasos a continuación.

Requisitos
Asegúrate de tener Node.js y npm instalados en tu sistema.

Descargar Node.js (incluye npm)
Instalación
Clona el repositorio:


git clone https://github.com/tu-usuario/ecommerce-home.git
Navega a la carpeta del proyecto:


cd ecommerce-home
Instala las dependencias:

npm install
Uso
Ejecuta el servidor de desarrollo:

npm start
Abre tu navegador y ve a http://localhost:3000 para ver la página de inicio.

Construir para Producción
Para crear una versión de producción, ejecuta:

bash
Copiar código
npm run build
Esto optimizará la aplicación y generará archivos estáticos en la carpeta build/.

Estructura del Proyecto
css
Copiar código
.
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   │   └── ProductList.tsx
│   ├── screen/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles/
│       └── main.css
├── package.json
└── README.md

components/: Contiene los componentes reutilizables de React, como la lista de productos.
screen/: Contiene los componentes a nivel de página como Home.tsx.
styles/: Contiene archivos CSS globales para los estilos de la aplicación.
