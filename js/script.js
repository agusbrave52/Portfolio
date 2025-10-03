document.addEventListener("DOMContentLoaded", function () {
    IniciarInfoConMouse();
});

function toggleSection(sectionId) {
    // Lista de todas las secciones
    const allSectionIds = ['sobreMi', 'proyectos', 'habilidades', 'contacto', 'descargar'];

    // cerrar las demás secciones
    allSectionIds.forEach(id => {
        if (id !== sectionId) {
            const otherSection = document.querySelector(`#${id}`);
            if (otherSection) {
                otherSection.style.display = "none";
            }
        }
    });

    // mostrar/ocultar la sección seleccionada
    const section = document.querySelector(`#${sectionId}`);
    if (section === 'habilidades') {
        section.style.display = section.style.display === "flex" ? "none" : "flex";
    }
    else{
        section.style.display = section.style.display === "block" ? "none" : "block";
    }
};

function addDynamicCSS(css) {
    // Eliminar todos los estilos dinámicos anteriores
    const existingDynamicStyles = document.querySelectorAll('style[data-dynamic="true"]');
    existingDynamicStyles.forEach(style => style.remove());
    
    // Crear nuevo elemento <style> 
    const style = document.createElement('style');
    style.setAttribute('data-dynamic', 'true'); // Marca para identificar estilos dinámicos
    style.textContent = css;

    // Agregar al <head>
    document.head.appendChild(style);

    console.log('CSS agregado dinámicamente (anteriores eliminados)');
};

/* botones  | <a> | fondo de texto | texto*/
function createColorTheme(primary, secondary, info, dark, nameTheme) {
    const themeCSS = `
        :root {
            --my-primary: ${primary};
            --my-secondary: ${secondary};
            --my-info: ${info};
            --my-dark: ${dark};
            --bs-primary: var(--my-primary);
            --bs-info: var(--my-info);
            --bs-secondary: var(--my-secondary);
            --bs-dark: var(--my-dark);
        }

        .btn-outline-primary {
            --bs-btn-color: var(--my-primary);
            --bs-btn-border-color: var(--my-primary);
            --bs-btn-hover-color: #000;
            --bs-btn-hover-bg: var(--my-primary);
            --bs-btn-hover-border-color: var(--my-primary);
            --bs-btn-active-color: #000;
            --bs-btn-active-bg: var(--my-primary);
            --bs-btn-active-border-color: var(--my-primary);
            --bs-btn-disabled-color: var(--my-primary);
            --bs-btn-disabled-border-color: var(--my-primary);
        }
        .bg-primary {background-color: var(--my-primary) !important;}
        .bg-secondary {background-color: var(--my-secondary) !important;}
        .bg-info {background-color: var(--my-info) !important;}
        .bg-dark {background-color: var(--my-dark) !important;}

        .text-primary {color: var(--my-primary) !important;}
        .text-secondary {color: var(--my-secondary) !important;}
        .text-info {color: var(--my-info) !important;}
        .text-dark {color: var(--my-dark) !important;}

        .border-primary {border-color: var(--my-primary) !important;}
        .border-secondary {border-color: var(--my-secondary) !important;}
        .border-info {border-color: var(--my-info) !important;}
        .border-dark {border-color: var(--my-dark) !important;}
    `;
    // Cambiar la clase del fondo
    const imagenFondo = document.querySelector('.imgFondo');
    imagenFondo.classList.remove('marron', 'verde', 'cyan', 'violet', 'navy', 'halloween', 'vintage', 'retro');
    imagenFondo.classList.add(nameTheme);
    // Aplicar el nuevo tema
    addDynamicCSS(themeCSS);
};

function toggleColorPalette() {
    // Mostrar u ocultar la paleta de colores
    const palette = document.querySelector('.botones');
    if (palette.style.display === "flex") {
        palette.style.display = "none";
    } else {
        palette.style.display = "flex";
    }
};

function IniciarInfoConMouse() {
    // Traigo los elementos del DOM de la paleta de colores
    const pltMarron = document.querySelector('.marron');
    const pltVerde = document.querySelector('.verde');
    const pltCyan = document.querySelector('.cyan');
    const pltViolet = document.querySelector('.violet');
    const pltNavy = document.querySelector('.navy');
    const pltHalloween = document.querySelector('.halloween');
    const pltVintage = document.querySelector('.vintage');
    const pltRetro = document.querySelector('.retro');
    const btnLinkedIn = document.getElementById('linkLinkedIn');
    const btnInstagram = document.getElementById('linkInstagram');
    const btnGitHub = document.getElementById('linkGitHub');

    // Tooltip de información para el mouse
    const infoTooltip = document.getElementById('info-mouse');

    // Eventos para mostrar el tooltip al pasar el mouse sobre cada botón
    pltMarron.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Marron`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltMarron.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    pltVerde.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Verde`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltVerde.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    pltCyan.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Cyan`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltCyan.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    pltViolet.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Violet`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltViolet.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    pltNavy.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Navy`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltNavy.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    pltHalloween.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Halloween`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltHalloween.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    pltVintage.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Vintage`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltVintage.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    pltRetro.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Retro`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    pltRetro.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    btnLinkedIn.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `LinkedIn`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    btnLinkedIn.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    btnInstagram.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `Instagram`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    btnInstagram.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });

    btnGitHub.addEventListener('mousemove', (e) => {
        infoTooltip.style.display = 'block';
        infoTooltip.textContent = `GitHub`;
        infoTooltip.style.left = (e.clientX - 80) + 'px';
        infoTooltip.style.top = (e.clientY + 15) + 'px';
    });

    btnGitHub.addEventListener('mouseleave', () => {
        infoTooltip.style.display = 'none';
    });
};