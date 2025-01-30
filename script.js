document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'familia' && password === 'familia') {
        // Redirigir a index.html si las credenciales son correctas
        window.location.href = 'index.html';
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});