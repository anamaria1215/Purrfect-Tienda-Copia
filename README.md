# 🐾 Purrfect Tienda

**Purrfect Tienda** es un sistema backend desarrollado con **NestJS**.  
Su objetivo es permitir que los amantes de los gatos puedan comprar productos en línea de forma fácil y segura.  

---

## Idea del negocio
La tienda está pensada como un **e-commerce especializado en productos para gatos**.  
Ofrece alimentos, juguetes, accesorios y más, con un manejo de inventario en tiempo real y opciones de pago en línea.  

### Actividades principales
- Venta de productos para gatos (alimento, juguetes, accesorios).  
- Registro y gestión de clientes.  
- Manejo de carritos de compra y pedidos.  
- Procesamiento de pagos en línea.  
- Administración de productos e inventario por parte del administrador.  
- Generación de reportes de ventas.  

---

## Rutas del sistema

### Usuario
- `POST /usuarios/registro` → Crear cuenta.  
- `POST /usuarios/login` → Iniciar sesión.  
- `GET /usuarios/perfil` → Ver perfil.  
- `PUT /usuarios/perfil` → Editar perfil.  

**Productos**
- `GET /productos` → Ver todos los productos.  
- `GET /productos/:id` → Ver detalle de un producto.  

**Carrito y pedidos**
- `POST /carrito` → Agregar producto al carrito.  
- `GET /carrito` → Ver carrito.  
- `DELETE /carrito/:id` → Quitar producto del carrito.  
- `POST /pedidos` → Confirmar pedido.  
- `GET /pedidos` → Ver historial de pedidos.  

**Pagos**
- `POST /pagos` → Realizar pago.  
- `GET /pagos/:id` → Ver detalle de pago.  

---

### Administrador
**Gestión de productos**
- `POST /admin/productos` → Crear producto.  
- `PUT /admin/productos/:id` → Editar producto.  
- `DELETE /admin/productos/:id` → Eliminar producto.  

**Inventario y pedidos**
- `GET /admin/inventario` → Ver inventario.  
- `GET /admin/pedidos` → Ver pedidos.  
- `PUT /admin/pedidos/:id` → Cambiar estado de pedido.  

**Reportes**
- `GET /admin/reportes` → Generar reporte de ventas.  

---

## Entidades principales

### Usuario
- idUsuario  
- nombre  
- correo  
- contraseña  
- teléfono  
- dirección  
- rol (cliente / admin)  

### Producto
- idProducto  
- nombre  
- descripción  
- precio  
- stock  
- categoría  

### Carrito
- idCarrito  
- idUsuario  
- fechaCreación  

### CarritoProducto
- idCarritoProducto  
- idCarrito  
- idProducto  
- cantidad  

### Pedido
- idPedido  
- idUsuario  
- fechaPedido  
- estado  
- total  

### PedidoProducto
- idPedidoProducto  
- idPedido  
- idProducto  
- cantidad  

### Pago
- idPago  
- idPedido  
- métodoPago  
- monto  
- fechaPago  
- estadoPago  

---

## Notas
- Se usaron los métodos **HTTP** (GET, POST, PUT, DELETE) para definir las rutas de usuario y administrador.  
---

