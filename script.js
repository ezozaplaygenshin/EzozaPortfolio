// Мобильное меню (burger)
(function () {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('burger');
    if (!navbar || !burger) return;

    function setOpen(open) {
        navbar.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
    }

    burger.addEventListener('click', function () {
        setOpen(!navbar.classList.contains('open'));
    });

    // закрыть меню при клике на ссылку
    navbar.querySelectorAll('.menu a').forEach(function (link) {
        link.addEventListener('click', function () { setOpen(false); });
    });

    // закрыть по Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
    });

    // закрыть при клике вне меню
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) setOpen(false);
    });

    // при расширении экрана до десктопа — сбросить состояние
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) {
        if (e.matches) setOpen(false);
    });
})();
