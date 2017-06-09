window.onload = function(){

	if (!ROT.isSupported()) {
		alert("The rot.js library isn't supported by browser.");
	} else {
			//display screen
			var display = new ROT.Display({width:80, height:20});
			var container = display.getContainer();
			//adds container to HTML
			document.body.appendChild(container);
			var foreground, background, colors;
			for (var i = 0; i < 15; i++) {
				//calculate the foreground color and background color, from darker to lighter
				foreground = ROT.Color.toRGB([255 - (i*20),
											  255 - (i*20),
											  255 - (i*20)]);
				background = ROT.Color.toRGB([i*20, i*20, i*20]);
				//creat the color format specifier
				colors = "%c{" + foreground + "}%b{" + background + "}";
				//draws the text at col 2 and row i
				display.drawText(2, i, colors + "Hello, world!");
		}
	}
	
}
