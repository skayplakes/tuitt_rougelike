Game.Tile = function(properties) {
	properties = properties || {};
	Game.Glyph.call(this, properties);
	this._isWalkable = properties['_isWalkable'] || false;
	this._isDiggable = properties['_isDiggable'] || true;
};

Game.Tile.extend(Game.Glyph);

//standard getters
Game.Tile.prototype.isWalkable = function() {
	return this._isWalkable;
}
Game.Tile.prototype.isDiggable = function() {
	return this._isDiggable;
}

Game.Tile.nullTile = new Game.Tile({})
Game.Tile.floorTile = new Game.Tile({
	character: '.',
	_isWalkable: true
});

Game.Tile.wallTile = new Game.Tile({
	character: '#',
	foreground: 'goldenrod',
	isDiggable: true
});