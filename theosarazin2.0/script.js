document.addEventListener('DOMContentLoaded', function() {
    const languageIcon = document.getElementById('language-icon');
    const languageMenu = document.getElementById('language-menu');

    languageIcon.addEventListener('click', function() {
        languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!languageIcon.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.style.display = 'none';
        }
    });
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Arrêter la lecture de l'audio
            var audio = document.getElementById('monAudio');
            if (audio) {
                audio.pause();
            }
    
            // Arrêter la lecture de la vidéo
            var video = document.getElementById('maVideo');
            if (video) {
                video.pause();
            }
        }
    });
});

function showTab(tabId) {
    var tabs = document.getElementsByClassName('content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');
}

function showArticle(articleId) {
    var articles = document.getElementsByClassName('full-article');
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }
    document.getElementById(articleId).style.display = 'block';
}

function translateToEnglish() {
    // Logique de traduction ici
    alert('Traduction en anglais en cours de développement.');
}
