document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    const loginContainer = document.getElementById("login-container");
    const registerContainer = document.getElementById("register-container");
    const mainContent = document.getElementById("main-content");
    const logoutBtn = document.getElementById("logout-btn");

    // Mostrar formulario de registro
    document.getElementById("show-register").addEventListener("click", () => {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    // Mostrar formulario de login
    document.getElementById("show-login").addEventListener("click", () => {
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    // Acción al enviar login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Aquí podrías validar credenciales si usas backend
        loginContainer.style.display = "none";
        mainContent.style.display = "block";
        logoutBtn.style.display = "block";
    });

    // Acción al enviar registro
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Aquí podrías registrar datos si usas backend
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    // Botón de cerrar sesión
    logoutBtn.addEventListener("click", () => {
        mainContent.style.display = "none";
        loginContainer.style.display = "block";
        logoutBtn.style.display = "none";
    });
});

