let tempC = +prompt("Ingresa la temperatura en grados celcius")


do {
    if (Number.isFinite(tempC)) {

        let div = document.getElementById("respuesta")
        div.innerHTML = `En kelvin: ${tempC + 273.15}; en Farenheit ${(tempC * 9 / 5) + 32}`
    }
} while (!Number.isFinite(tempC))
