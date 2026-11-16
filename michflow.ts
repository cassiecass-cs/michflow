
export class Toast{
	
	title:string;
	message:string;
	type:string;
	sounds: { [key: string]: HTMLAudioElement };

	constructor(title:string,message:string,type:string){

		this.title = title;
		this.message = message;
		this.type = type;

		this.sounds = {
            success: new Audio("./musica/notificacion.wav"),
            error: new Audio("./musica/notificacion.wav"),
            alert: new Audio("./musica/notificacion.wav")
        };

	}

	modify(title:string,message:string,type:string){
		this.title = title;
		this.message = message;
		this.type = type;
	}

	show(){

	const currentSound = this.sounds[this.type];
    
    if (currentSound) {
        currentSound.currentTime = 0; // Reinicia el audio por si se repite rápido
       	currentSound.play().catch(error => {
            console.log("Error al reproducir audio:", error);
        });
    }

	// 1. Buscamos el contenedor flotante en el body (o lo creamos si no existe)
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // 2. Creamos el elemento del toast con exactamente tu estructura
    const toast = document.createElement('div');
    toast.className = `toast toast-${this.type}`;
    
    toast.innerHTML = `
        <div class="toast-content">
            <h4 class="toast-title">${this.title}</h4>
            <p class="toast-message">${this.message}</p>
        </div>
        <button class="toast-close" aria-label="Cerrar">&times;</button>
    `;

    // 3. Hacemos que el botón de la "X" borre el toast al hacerle clic
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn?.addEventListener('click', () => {
        toast.remove();
    });

    // 4. Agregamos el toast al contenedor
    container.appendChild(toast);

    // 5. Opcional: Auto-eliminarse después de 4 segundos
    setTimeout(() => {
        if (toast.isConnected) {
            toast.remove();
        }
    }, 4000);

	}


}