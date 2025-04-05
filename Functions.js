function aumentarPrecioATodos(productos, montoAdicional) {
    productos.forEach( producto => producto.precioBase = producto.precioBase + montoAdicional)
}

function precioFinalMasCaro(productos) {
    return Math.max(... preciosFinales(productos))
}

function preciosFinales(productos) {
    return productos.map( producto => producto.precioFinal())
}

function preciosFinalesMenoresA(productos, montoMaximo) {
    return preciosFinales(productos).filter( precioFinal => precioFinal < montoMaximo)
}

function sumaTotalDePrecios(productos) {
    return preciosFinales(productos).reduce(
        (precioAcumulado, precio) => precioAcumulado + precio,
        0
    )
}

function ordenarDeMayorAMenorPorPrecio(productos) {
    return preciosFinales(productos).sort(
        (unPrecio, otroPrecio) =>  unPrecio - otroPrecio  
    )
}

module.exports = { ordenarDeMayorAMenorPorPrecio,
    sumaTotalDePrecios,
    precioFinalMasCaro,
    preciosFinalesMenoresA,
    aumentarPrecioATodos
}