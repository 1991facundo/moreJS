const autenticado = true;

autenticado
  ? console.log("usuario autenticado")
  : console.log("No autenticado, dirigir hacia el login");

//doble ternario

const saldo = 600;
const pagar = 800;
const tarjeta = true;

saldo > pagar
  ? console.log("puedes pagar con saldo")
  : tarjeta
  ? console.log("puedes pagar con tarjeta")
  : console.log("No puedes pagar");
 