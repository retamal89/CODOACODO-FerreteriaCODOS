// Función para obtener el valor del dólar desde una API
function obtenerValorDolar() {
    // Reemplaza la siguiente URL con la API que deseas utilizar
    const apiUrl = 'https://dolarapi.com/v1/dolares/oficial'; // Cambia esta URL por la API real que prefieras

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Actualiza el valor del dólar en el elemento HTML con el ID "dolar-amount"
            const dolarAmount = data.valor; // Asume que la API devuelve el valor del dólar en "valor"
            const dolarAmountElement = document.getElementById('dolar-amount');
            dolarAmountElement.textContent = `$${dolarAmount.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Error al obtener el valor del dólar', error);
        });
}

// Llama a la función para obtener el valor del dólar cuando se cargue la página
obtenerValorDolar();