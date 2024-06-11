document.getElementById('toggleMenu').addEventListener('click', function () {
    var menu = document.getElementById('ftmenu');
    this.classList.toggle('rotate'); 

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // Zaman aşımını sıfırlamak için bir sonraki render döngüsünü bekler
        setTimeout(function () {
            menu.style.maxHeight = menu.scrollHeight + 'px';
            menu.style.maxWidth = '100%'; // genişliğin animasyonlu olması için
        }, 0);
    } else {
        menu.style.maxHeight = '0px';
        menu.style.maxWidth = '0px';
        menu.addEventListener('transitionend', function () {
            menu.classList.add('hidden');
        }, { once: true });
    }
});
