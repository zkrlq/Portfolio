document.addEventListener('DOMContentLoaded', function() {
    function adjustContentSize() {
        const content = document.getElementById('responsiveContent');
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Ajustar o tamanho da fonte e o padding baseado na largura da tela
        if (viewportWidth < 600) {
            content.style.fontSize = '14px';
            content.style.padding = '10px';
        } else if (viewportWidth < 900) {
            content.style.fontSize = '18px';
            content.style.padding = '15px';
        } else {
            content.style.fontSize = '22px';
            content.style.padding = '20px';
        }

        // Ajustar a altura baseada na altura da tela
        content.style.height = `${viewportHeight * 0.6}px`; // Ajusta a altura para 60% da altura da tela
    }

    // Ajustar o tamanho ao carregar a página
    adjustContentSize();

    // Ajustar o tamanho ao redimensionar a janela
    window.addEventListener('resize', adjustContentSize);
});
