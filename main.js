chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('player.html', {
	    bounds: {
	      width: Math.round(screen.availWidth*0.85),
	      height: Math.round(screen.availHeight*0.85)
	    }, minWidth:940, minHeight: 340
	});
});