function redirectToSocialProfile(socialMedia, id) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var profileID;
    var appScheme;
    var webURL;

    // Configuración según la red social seleccionada
    switch (socialMedia) {
        case 'linkedin':
            profileID = "jhenrryaranibar"; // Reemplaza esto con tu identificación de LinkedIn
            appScheme = (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) ? 'linkedin://profile/view?id=' : 'intent://profile/view?id=';
            webURL = 'https://www.linkedin.com/profile/view?id=';
            break;
        case 'youtube':
            profileID = "UC-rgmo6lrbszpg9XijBKEBw"; // Reemplaza esto con el ID de tu canal de YouTube
            appScheme = (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) ? 'youtube://www.youtube.com/channel/' : 'intent://www.youtube.com/channel/';
            webURL = 'https://www.youtube.com/channel/';
            break;
        case 'instagram':
            profileID = "jhenrryaranibar"; // Reemplaza esto con tu nombre de usuario de Instagram
            appScheme = 'instagram://user?username=';
            webURL = 'https://www.instagram.com/';
            break;
        case 'tiktok':
            profileID = "jhenrryaranibar"; // Reemplaza esto con tu nombre de usuario de TikTok
            appScheme = 'tiktok://user/';
            webURL = 'https://www.tiktok.com/@';
            break;
        case 'facebook':
            profileID = "jhenrryaranibar"; // Reemplaza esto con tu nombre de usuario de Facebook
            appScheme = 'fb://profile/';
            webURL = 'https://www.facebook.com/';
            break;
        case 'behance':
            profileID = "jhenrryaranibar"; // Reemplaza esto con tu nombre de usuario de Behance
            appScheme = 'behance://profile/';
            webURL = 'https://www.behance.net/';
            break;
        case 'youtube-video':
            profileID = id; // ID del video de YouTube
            appScheme = (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) ? 'youtube://www.youtube.com/watch?v=' : 'intent://www.youtube.com/watch?v=';
            webURL = 'https://www.youtube.com/watch?v=';
            break;
        case 'youtube-playlist':
            profileID = id; // ID de la lista de reproducción de YouTube
            appScheme = (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) ? 'youtube://www.youtube.com/playlist?list=' : 'intent://www.youtube.com/playlist?list=';
            webURL = 'https://www.youtube.com/playlist?list=';
            break;
        default:
            console.error('Red social no reconocida');
            return;
    }

    // Detecta si el usuario está usando un dispositivo móvil
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
        // Redirige a la aplicación correspondiente
        window.location.href = appScheme + profileID;
    } else {
        // Redirige al perfil de la red social en el navegador web para otras plataformas
        window.location.href = webURL + profileID;
    }
}