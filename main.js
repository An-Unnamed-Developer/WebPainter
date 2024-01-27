let debugMode = false;

function enableDebugMode() {
    console.warn("Debug mode enabled! You're on your own here!");
    debugMode=true;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Should be loaded.")
})