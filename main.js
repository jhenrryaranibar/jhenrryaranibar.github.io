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

function abrirEnlaceBehance(event) {
    event.preventDefault(); // Evita que el enlace se comporte de forma predeterminada

    var enlaceBehance = "https://www.behance.net/jhenrryaranibar"; // Reemplaza "enlace" con el enlace de Behance que deseas abrir
    var urlAppBehance = "behance://projects"; // URL de la aplicación de Behance en Android

    // Intenta abrir el enlace en la aplicación de Behance
    window.location.href = urlAppBehance + "?project=" + encodeURIComponent(enlaceBehance);

    // Si no se puede abrir en la aplicación de Behance, redirige al enlace Behance en el navegador
    setTimeout(function () {
        window.location.href = enlaceBehance;
    }, 500);
}