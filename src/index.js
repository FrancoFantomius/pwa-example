if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then( registration => {
        console.log("Service Worker Registered");
        console.log(registration);
    }).catch( err => {
        console.log("Service Worker Failed to Register", err)
    });
} else{
    console.log("Service Worker is not supported in this browser");
}