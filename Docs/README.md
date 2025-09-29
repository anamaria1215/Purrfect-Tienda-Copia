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

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
