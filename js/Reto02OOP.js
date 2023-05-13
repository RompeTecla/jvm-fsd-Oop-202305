class Password {
  constructor(longitud = 8) {
    this.longitud = longitud;
    this.contraseña = this.passwordasswordRandom();
  }

  passwordRandom() {
    const caracteres =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let passwordRandom = "";
    for (let i = 0; i < this.longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      passwordRandom += caracteres.charAt(randomIndex);
    }
    return passwordRandom;
  }
}
