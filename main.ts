import { Toast } from "./michflow.js";

const btn_alerta = document.getElementById("alerta");

// 1. Falta declarar la variable con 'let'
// 2. Si tu clase guarda el título y mensaje al instanciar, pásalos así:
let toast = new Toast("Aviso", "Este es un mensaje exitoso", "success");

btn_alerta?.addEventListener("click", () => {

    toast.show();
    
});