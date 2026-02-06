do {

    let tempC = +prompt("Ingresa la temperatura en grados celcius")
    if (Number.isFinite(tempC)) {
        let div = document.getElementById("respuesta")
        div.innerHTML = `En kelvin: ${tempC + 273.15}; en Farenheit ${(tempC * 9 / 5) + 32}`
    } else {
        alert("No es un número, intenta de nuevo")
        window.location.reload()
    }
} while (!Number.isFinite(tempC))
