# 🛒 Barber Shop Machines – E-commerce

> E-commerce de máquinas de barbería desarrollado como proyecto final de la cursada de **Desarrollo Full Stack**. Aprobado con nota destacada. 🎓

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

🔗 **[Ver demo en vivo →](https://react-proye.vercel.app)**

---

## 📦 Funcionalidades

- 🛍️ Listado dinámico de productos desde Firestore
- 🗂️ Filtrado por categorías
- 🔍 Vista de detalle de cada producto
- 🛒 Carrito de compras con control de stock
- ✅ Finalización de compra con generación de orden en Firebase
- 🔔 Alertas visuales con SweetAlert2 (agregar al carrito, compra exitosa, errores)

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **React** | Librería principal de UI |
| **React Router DOM** | Navegación entre vistas (SPA) |
| **Firebase Firestore** | Base de datos en tiempo real |
| **SweetAlert2** | Alertas y feedback visual al usuario |
| **CSS / Styled Components** | Estilos de la aplicación |
| **Vite** | Bundler y entorno de desarrollo |

---

## 🧭 Rutas de la aplicación

```
/                  → Home / Catálogo de productos
/category/:id      → Productos filtrados por categoría
/item/:id          → Detalle del producto
/cart              → Carrito de compras
/checkout          → Finalización de compra
```

---

## 🔥 Estructura en Firebase

```
Firestore
├── products/       → Catálogo de productos (nombre, precio, stock, imagen, categoría)
└── orders/         → Órdenes generadas al finalizar la compra
```

---

## 🧠 Lo que aprendí en este proyecto

- Integrar **Firebase Firestore** como backend: lectura y escritura de datos en tiempo real
- Gestionar el estado global del carrito con **Context API**
- Implementar navegación dinámica con **React Router DOM** y rutas con parámetros
- Controlar el **stock de productos** al momento de agregar al carrito y finalizar la compra
- Manejar el flujo completo de una compra: catálogo → detalle → carrito → orden generada

---

## 📬 Contacto

¿Querés ver más proyectos o trabajar juntos?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/agustin-lihuel-rodr%C3%ADguez-9968b7353/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AgustinRodriguez23)
