// Obtén el formulario por su ID
const formulario = document.querySelector('.formulario');

// Agrega un evento de envío al formulario
formulario.addEventListener('submit', function (event) {
  // Variables para almacenar los errores
  let errores = false;

  // Obtén los campos del formulario
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const consulta = document.getElementById('consulta');

  // Valida el campo Nombre
  if (nombre.value === '') {
    alert('Por favor, ingrese su nombre.');
    errores = true;
  }

  // Valida el campo Apellido
  if (apellido.value === '') {
    alert('Por favor, ingrese su apellido.');
    errores = true;
  }

  // Valida el campo Email
  if (email.value === '') {
    alert('Por favor, ingrese su correo electrónico.');
    errores = true;
  } else if (!isValidEmail(email.value)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    errores = true;
  }

  // Valida el campo Teléfono
  if (telefono.value === '') {
    alert('Por favor, ingrese su teléfono.');
    errores = true;
  }

  // Valida el campo Consulta
  if (consulta.value === '') {
    alert('Por favor, ingrese su consulta.');
    errores = true;
  }

  // Si hay errores, evita que el formulario se envíe
  if (errores) {
    event.preventDefault();
  }
});

// Función para validar una dirección de correo electrónico
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
