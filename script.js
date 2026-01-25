// Script básico inicial
// Aqui você pode futuramente adicionar:
// - menu mobile
// - carregamento de artigos
// - banners dinâmicos
// - analytics

console.log("Tudo Sobre Rodas carregado com sucesso!");



function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    sidebar.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        body.style.overflow = 'hidden'; // trava scroll
    } else {
        body.style.overflow = ''; // libera scroll
    }
}

/* Fecha o menu ao clicar em qualquer link */
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const links = sidebar.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
});
