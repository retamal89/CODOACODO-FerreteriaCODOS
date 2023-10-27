// Función para validar una dirección de correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  
  // Función para mostrar mensajes de error
  function mostrarError(mensaje) {
    const erroresContainer = document.getElementById('errores-container');
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = mensaje;
    erroresContainer.appendChild(errorParagraph);
  }
  
  // Función para obtener el valor del dólar oficial
  function obtenerValorDolar() {
    const dolarAmountElement = document.getElementById('dolar-amount');
    const apiUrl = 'https://dolarapi.com/v1/dolares/oficial';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        dolarAmountElement.textContent = data.compra.toFixed(2);
      })
      .catch(error => {
        console.error('Error al obtener el valor del dólar:', error);
        dolarAmountElement.textContent = 'Error al obtener el valor';
      });
  }
  
  // Función para validar el formulario
  function validarFormulario(event) {
  }
  
  // Agrega un evento de envío al formulario
  const formulario = document.querySelector('.formulario');
  formulario.addEventListener('submit', validarFormulario);
  
  // Llama a la función para obtener el valor del dólar cuando se carga la página
  window.onload = obtenerValorDolar;
  