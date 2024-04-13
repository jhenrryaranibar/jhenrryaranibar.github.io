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