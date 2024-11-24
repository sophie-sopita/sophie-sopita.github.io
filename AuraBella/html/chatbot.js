// Referencia al contenedor de mensajes
const chatWindow = document.getElementById("chat-window");

// Diccionario de respuestas predefinidas
const respuestas = {
  ofertas: "Actualmente tenemos un 20% de descuento en productos seleccionados. ¡Visítanos para más detalles!",
  reclamo: "Si tienes un reclamo, por favor contáctanos en nuestro correo: atencion@aurabella.com.",
  distribuidor: "Para ser distribuidor, escríbenos a: distribucion@aurabella.com.",
  contacto: "Puedes contactarnos a través de nuestro correo: contacto@aurabella.com o nuestro WhatsApp: +57 3123456789.",
  pago: "Aceptamos pagos con tarjeta de crédito, débito, transferencias bancarias y métodos como PayPal.",
  envio: "Nuestros envíos tardan entre 2 y 5 días hábiles dentro de Colombia.",
  promocion: "Para participar en promociones, sigue nuestras redes sociales y revisa los términos y condiciones en nuestro sitio web.",
  reembolso: "Consulta nuestra política de reembolsos en la sección 'Términos y Condiciones' o contáctanos directamente.",
  cuidados: "Un consejo esencial: usa protector solar todos los días para mantener tu piel sana.",
  catalogo: "Solicita nuestro catálogo enviando un correo a: catalogo@aurabella.com."
};

// Función para manejar las opciones seleccionadas
function handleOption(opcion) {
  // Eliminar cualquier mensaje previo
  chatWindow.innerHTML = "";

  // Crear el mensaje del usuario
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.textContent = "Usuario: " + document.querySelector(`button[onclick="handleOption('${opcion}')"]`).textContent;
  chatWindow.appendChild(userMessage);

  // Crear el mensaje de respuesta
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");
  botMessage.textContent = "AuraBella: " + respuestas[opcion];
  chatWindow.appendChild(botMessage);

  // Desplazar al último mensaje
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
