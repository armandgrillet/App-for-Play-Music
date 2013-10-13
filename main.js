chrome.app.runtime.onLaunched.addListener(
	function() {
		chrome.storage.local.get( 
			["left", "top", "width", "height"], 
			function(afpm) {
				if (afpm.left != undefined && afpm.top != undefined && afpm.width != undefined && afpm.height != undefined) {
					chrome.app.window.create(
						'player.html', 
						{
						    bounds: {
						    	left: afpm.left,
						    	top: afpm.top,
						      	width: afpm.width,
						      	height: afpm.height
						    }, 
						    minWidth:940, minHeight: 340
						}
					)
				}
				else {
					chrome.app.window.create(
						'player.html', 
						{
						    bounds: {
						      	width: Math.round(screen.availWidth*0.85),
						      	height: Math.round(screen.availHeight*0.85)
						    }, 
					    	minWidth:940, minHeight: 340
						}
					);
				}
			}
		)
	}
);
