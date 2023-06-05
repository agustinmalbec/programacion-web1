const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const html = document.getElementById('placeHolder');

// Escucha evento de submit y realiza acciones

form.addEventListener('submit', event => {
    const warningText = document.createElement('p');
    warningText.setAttribute("id", "warningText");
    event.preventDefault();
    let warnings = '';
    let entry = false;
    let reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    html.innerHTML = '';
    if (message.value.length > 40) {
        warnings += `El mensaje es muy largo <br>`;
        entry = true;
    }
    if (!reEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        entry = true;
    }
    if (entry) {
        warningText.innerHTML = warnings;
    } else {
        warningText.innerHTML = ` <h3>Mensaje enviado correctamente</h3>
    <p>Nombre: ${name.value}</p>
    <p>Email: ${email.value}</p>
    <p>Mensaje: ${message.value}</p>
    `;
    }
    html.appendChild(warningText);
});