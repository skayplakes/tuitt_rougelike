// var Game = {
// 	_display: null,
// 	_currentScreen: null,
// 	_screenWidth: 80;
// 	_screenHeight: 24;
// 	init: function() {
// 		//new display
// 		this._display = new ROT.Display({width: this._screenWidth, height: this._screenHeight});
// 		//creates helper function for binding to an event
// 		//and making it send to screen

// 		var game = this; //so that we dont lose  this

// 		var bindEventToScreen = function(event) {
// 			window.addEventListener(event, function(e) {
// 				//when an event is received, send to the screen
// 				if (game._currentScreen !== null) {
// 					//send the event and data to screen
// 					game._currentScreen.handleInput(event,e);
// 					//clear the screen
// 					game.display.clear();
// 					//render the screen
// 					game._currentScreen.render(game._display);
// 				}
// 			});
// 		}
// 		//bind keyboard inputs to events
// 		bindEventToScreen('keydown');
// 		// bindEventToScreen('keyup');
// 		// bindEventToScreen('keypress');

// 	},

// 	getDisplay: function() {
// 		return this._display;
// 	},
// 	getScreenWidth: function() {
// 		return this._screenWidth;
// 	},
// 	getScreenHeight: function() {
// 		return this._screenHeight;
// 	}

// 	switchScreen: function(screen) {
// 		//notify the screen if we exited
// 		if (this._currentScreen !== null) {
// 			this._currentScreen.exit();
// 		}
// 		//clear the display
// 		this.getDisplay().clear();
// 		//update the current screen, notifies if we enter
// 		//and then render
// 		this._currentScreen = screen;
// 		if (!this._currentScreen !== null) {
// 			this._currentScreen.enter();
// 			this._currentScreen.render(this._display);
// 		}
// 	}
// }

// window.onload = function() {
// 	//check if rot.js can work
// 	if (!ROT.isSupported()) {
// 		alert("The rot.js library isn't supported by browser.");
// 	} else {
// 		//initialize game
// 		Game.init();
// 		//add container
// 		document.body.appendChild(Game.getDisplay().getContainer());
// 		//Load start screen
// 		Game.switchScreen(Game.Screen.startScreen);
// 	}
// }

var Game =  {
	_display: null,
    _currentScreen: null,
    _screenWidth: 80,
    _screenHeight: 24,
	init: function() {
        // Any necessary initialization will go here.
        this._display = new ROT.Display({width: this._screenWidth,
                                         height: this._screenHeight});
        // Create a helper function for binding to an event
        // and making it send it to the screen
        var game = this; // So that we don't lose this
        var bindEventToScreen = function(event) {
            window.addEventListener(event, function(e) {
                // When an event is received, send it to the
                // screen if there is one
                if (game._currentScreen !== null) {
                    // Send the event type and data to the screen
                    game._currentScreen.handleInput(event, e);
                    // Clear the screen
                    game._display.clear();
                    // Render the screen
                    game._currentScreen.render(game._display);
                }
            });
        }
        // Bind keyboard input events
        bindEventToScreen('keydown');
        //bindEventToScreen('keyup');
        //bindEventToScreen('keypress');
    },
	getDisplay: function() {
		return this._display;
	},
	getScreenWidth: function() {
    return this._screenWidth;
	},
	getScreenHeight: function() {
	    return this._screenHeight;
	},
	switchScreen: function(screen) {
	    // If we had a screen before, notify it that we exited
	    if (this._currentScreen !== null) {
	        this._currentScreen.exit();
	    }
	    // Clear the display
	    this.getDisplay().clear();
	    // Update our current screen, notify it we entered
	    // and then render it
	    this._currentScreen = screen;
	    if (!this._currentScreen !== null) {
	        this._currentScreen.enter();
	        this._currentScreen.render(this._display);
	    }
	}
}

window.onload = function() {
    // Check if rot.js can work on this browser
    if (!ROT.isSupported()) {
        alert("The rot.js library isn't supported by your browser.");
    } else {
        // Initialize the game
        Game.init();
        // Add the container to our HTML page
        document.body.appendChild(Game.getDisplay().getContainer());
        // Load the start screen
        Game.switchScreen(Game.Screen.startScreen);
    }
}