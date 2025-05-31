
const users = [
    {
        username: "testUser",
        email: "test@example.com",
        password: "4dA1Ts_2425",
    },
];

const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

export const login = async (email, password) => {
    await simulateDelay(1000);
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
        return { success: true, message: "Inicio de sesión exitoso", user };
    } else {
        throw { success: false, message: "Credenciales inválidas" };
    }
};

export const register = async (username, email, password) => {
    await simulateDelay(1000);
    if (!isValidEmail(email)) {
        throw { success: false, message: "El email no tiene un formato válido" };
    }
    if (!isValidPassword(password)) {
        throw {
            success: false,
            message:
                "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.",
        };
    }
    if (users.some((u) => u.email === email || u.username === username)) {
        throw { success: false, message: "El usuario o email ya está registrado" };
    }
    users.push({ username, email, password });
    return { success: true, message: "Registro exitoso" };
};

export const recoverPassword = async (email) => {
    await simulateDelay(1000);
    const user = users.find((u) => u.email === email);
    if (user) {
        console.log(`Enlace de recuperación enviado a ${email}`);
        return { success: true, message: "Enlace de recuperación enviado" };
    } else {
        throw { success: false, message: "El correo no está registrado" };
    }
};

