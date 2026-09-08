async function mostrarFraseDelDia() {
    try {
        // Cargar las frases desde el archivo JSON
        const respuesta = await fetch("./frases.json");

        // Convertir el contenido a un objeto JavaScript
        const frases = await respuesta.json();

        // Obtener la fecha actual
        const hoy = new Date();

        const mes = String(hoy.getMonth() + 1).padStart(2, "0");
        const dia = String(hoy.getDate()).padStart(2, "0");

        // Crear una clave como "09-07" o "02-29"
        const claveDelDia = `${mes}-${dia}`;

        // Buscar la frase correspondiente
        const frase = frases[claveDelDia];

        // Mostrar la frase en la página
        document.getElementById("frase").textContent =
            frase || "Hoy es un buen día para crear algo bonito. ✨";

        // Mostrar la fecha
        document.getElementById("fecha").textContent =
            hoy.toLocaleDateString("es-CR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            });

    } catch (error) {
        console.error("No se pudieron cargar las frases:", error);

        document.getElementById("frase").textContent =
            "No se pudo cargar la frase del día. Inténtalo nuevamente. 🌸";
    }
}

mostrarFraseDelDia();