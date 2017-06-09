Game.Map = function(tiles) {
	this._tiles = tiles;
	//cache the width and height
	//based on dimension of tiles array
	this._width = tiles.length;
	this._height = tiles[0].length;
};

//standard getters
Game.Map.prototype.getWidth = function() {
	return this._width;
};
Game.Map.prototype.getHeight = function() {
	return this._height;
};

//tiles for a given coordinate set
Game.Map.prototype.getTile = function(x, y) {
	//function to check if in container area
	//if out of bounds, return null tile
	if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
		return Game.Tile.nullTile;
	} else {
		return this._tiles[x][y] || Game.Tile.nullTile;
	}
};

Game.Map.prototype.dig = function(x, y) {
	//if tile is dug, transforms into floor
	if (this.getTile(x,y).isDiggable()) {
		this._tiles[x][y] = Game.Tile.floorTile;
	}
}

Game.Map.prototype.getRandomFloorPosition = function() {
	var x, y;
	do {
		x = Math.floor(Math.random() * this._width);
		y = Math.floor(Math.random() * this._width);
	} while(this.getTile(x, y) != Game.Tile.floorTile);
	return {x: x, y: y};
}