Game.Glyph = function(properties) {
	//returns to default if not satisfied
	properties = properties || {};
	this._char = properties['character'] || ' ';
	this._foreground = properties['foreground'] || 'green';
	this._background = properties['background'] || 'black';
};

//standard getters for glyphs
Game.Glyph.prototype.getChar = function(){
	return this._char;
}
Game.Glyph.prototype.getBackground = function(){
	return this._background;
}
Game.Glyph.prototype.getForeground = function(){
	return this._foreground;
}