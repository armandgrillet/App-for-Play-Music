chrome.app.runtime.onLaunched.addListener(
	function() {
		chrome.app.window.create("player.html", {
		    bounds: {
		      	width: Math.round(screen.width * 0.85),
		      	height: Math.round(screen.height * 0.85)
		    }, 
		    id: "AfPM",
		    minWidth: 940, 
		    minHeight: 340
		});
	}
);
