function redirectToYouTube() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var channelID = "UC-rgmo6lrbszpg9XijBKEBw"; // Reemplaza esto con el ID de tu canal de YouTube

    // Detecta si el usuario está usando un dispositivo móvil
    if (/android/i.test(userAgent)) {
        // Redirige a la aplicación de YouTube en Android
        window.location.href = "intent://www.youtube.com/channel/" + channelID + "#Intent;package=com.google.android.youtube;scheme=https;end;";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirige a la aplicación de YouTube en iOS
        window.location.href = "youtube://www.youtube.com/channel/" + channelID;
    } else {
        // Redirige al canal de YouTube en el navegador web para otras plataformas
        window.location.href = "https://www.youtube.com/channel/" + channelID;
    }
}


function redirectToBehance() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var profileID = "jhenrryaranibar"; // Reemplaza esto con tu nombre de usuario de Behance

    // Detecta si el usuario está usando un dispositivo móvil
    if (/android/i.test(userAgent)) {
        // Redirige a la aplicación de Behance en Android
        window.location.href = "intent://profile/" + profileID + "#Intent;package=com.behance.behance;scheme=https;end;";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirige a la aplicación de Behance en iOS
        window.location.href = "behance://profile/" + profileID;
    } else {
        // Redirige al perfil de Behance en el navegador web para otras plataformas
        window.location.href = "https://www.behance.net/" + profileID;
    }
}