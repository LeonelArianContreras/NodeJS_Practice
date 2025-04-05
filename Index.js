const { Producto, DescuentoFijo, DescuentoPorcentual, DescuentoPorCantidad } = require("./Domain.js")
const { aumentarPrecioATodos, precioFinalMasCaro, preciosFinalesMenoresA, ordenarDeMayorAMenorPorPrecio } = require("./Functions.js")

const carrito = []

const dcto1 = new DescuentoFijo(200)
const dcto2 = new DescuentoPorcentual(50)
const dcto3 = new DescuentoPorCantidad(2, 50)

const prod1 = new Producto("Coca Cola", 400, "Bebidas", 3)
const prod2 = new Producto("Fanta", 1450, "Bebidas", 2)

prod1.agregarDescuento(dcto1)
prod1.agregarDescuento(dcto3)
prod2.agregarDescuento(dcto2)

carrito.push(prod1)
carrito.push(prod2)
console.log(carrito)

aumentarPrecioATodos(carrito, 250)

const productoCaro = precioFinalMasCaro(carrito)
console.log(productoCaro)

const productosMenoresA = preciosFinalesMenoresA(carrito, 1000)
console.log(productosMenoresA)

const productosOrdenados = ordenarDeMayorAMenorPorPrecio(carrito)
console.log(productosOrdenados)