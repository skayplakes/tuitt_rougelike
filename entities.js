Game.Mixins = {};

//defines movable mixin
Game.Mixins.Moveable = {
	name: 'Moveable',
	tryMove: function(x, y, map) {
		var tile = map.getTile(x, y);
		//checks if we can walk on the tile
		//if true, the player walks on it
		if (tile.isWalkable()) {
			//update's entities position
			this._x = x;
			this._y = y;
			return true;
		} else if (tile.isDiggable()) {
			map.dig(x, y);
			return true; //checks if the tile is diggable. if true, player digs through it
		}
		return false;
	}
}

//player
Game.PlayerTemplate = {
	character: '@',
	foreground: 'white',
	background: 'black',
	mixins: [Game.Mixins.Moveable]
}