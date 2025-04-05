class Producto {

    constructor(nombre, precioBase, categoria, cantidad) {
        this.nombre = nombre
        this.precioBase = precioBase
        this.descuentos = []
        this.categoria = categoria
        this.cantidad = cantidad
    }

    precioTotalBase() {
        return this.cantidad * this.precioBase
    }

    agregarDescuento(unDescuento) {
        this.descuentos.push(unDescuento)
    }

    precioFinal() {
        const precioTotalBase = this.cantidad * this.precioBase;
        const precioFinal = this.descuentos.reduce(
            (precioAcumulado, unDescuento) =>
                precioAcumulado - unDescuento.descuento(precioAcumulado, this.cantidad),
            precioTotalBase 
        )
        return Math.max(0, precioFinal); // Para evitar precios negativos
    }

}

class DescuentoPorcentual {
    porcentaje

    constructor(porcentaje) {
        this.porcentaje = porcentaje
    }

    descuento(unPrecio, _cantidad) {
        return unPrecio * this.porcentaje / 100
    }
}

class DescuentoFijo {
    descuentosFijo

    constructor(descuentoFijo) {
        this.descuentosFijo = descuentoFijo
    }

    descuento(_unPrecio, cantidad) {
        return this.descuentosFijo * cantidad
    }
}

class DescuentoPorCantidad {
    cantidad // En la 3er unidad (cantidad) hay un descuento de 50% (porcentaje)
    #porcentaje 

    constructor(cantidad, porcentaje) {
        this.cantidad = cantidad
        this.#porcentaje = porcentaje
    }

    descuento(precioTotal, cantidadTotal) {
        const vecesQueRepiteElDescuento = Math.floor(cantidadTotal / this.cantidad)
        if(vecesQueRepiteElDescuento >= 1) 
            return precioTotal * this.#porcentaje / 100 * vecesQueRepiteElDescuento
        return 0
    }
}

module.exports = { Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual }