document.querySelector('webview').setAttribute('src', 'https://play.google.com/music/listen'); // Get Google Play Music

document.querySelector('webview').addEventListener("loadstop", function () { // When the webview is fully loaded
   document.querySelector('webview').insertCSS({ file : "webview.css"}, function() {}); // Load the custom CSS to remove the black topbar (more "app" style)
});