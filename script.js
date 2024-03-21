document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las tarjetas
    const cards = document.querySelectorAll('.card');
    let lives = 3; // Inicializar el contador de vidas
    let extintorIndex; // Variable para almacenar el índice del extintor

    // Función para reiniciar el juego
    function resetGame() {
        // Reiniciar el contador de vidas
        lives = 3;
        document.getElementById('lives').textContent = lives;
        // Elegir una tarjeta aleatoria para el extintor
        extintorIndex = Math.floor(Math.random() * cards.length);
        // Restaurar la imagen del extintor en todas las tarjetas
        cards.forEach((card, index) => {
            if (index === extintorIndex) {
                card.querySelector('.back').style.backgroundImage = "url('extintor.png')";
            } else {
                card.querySelector('.back').style.backgroundImage = "url('explosion.png')";
            }
        });
    }

    // Función para disminuir el contador de vidas
    function decreaseLives() {
        lives--;
        // Actualizar la visualización de las vidas en la interfaz
        document.getElementById('lives').textContent = lives;
        // Verificar si se ha perdido el juego
        if (lives === 0) {
            // Mostrar mensaje de fin del juego
            alert("¡Has perdido! Inténtalo de nuevo.");
            // Reiniciar el juego
            resetGame();
        }
    }

    // Función para manejar el evento click en las tarjetas
    function cardClickHandler() {
        // Verificar si la tarjeta hace explotar una bomba
        if (this.querySelector('.back').style.backgroundImage.includes('explosion')) {
            // Disminuir el contador de vidas
            decreaseLives();
        } else if (this.querySelector('.back').style.backgroundImage.includes('extintor')) {
            // Mostrar mensaje de victoria si se descubre el extintor
            alert("¡Has ganado! Encontraste el extintor.");
            // Reiniciar el juego
            resetGame();
        }
    }

    // Agregar evento click a todas las tarjetas
    cards.forEach(card => {
        card.addEventListener('click', cardClickHandler);
    });

    // Iniciar el juego por primera vez
    resetGame();
});


