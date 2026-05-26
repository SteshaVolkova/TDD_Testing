export function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        return false;
    }

    if (!/[0-9]/.test(password)) {
        return false;
    }

    if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    return true;
}