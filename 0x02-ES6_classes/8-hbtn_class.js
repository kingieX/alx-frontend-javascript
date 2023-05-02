class HolbertonClass {
	constructor(size, location) {
		this._size = size;
		this._location = location;
	}

	get size() {
		return this._size;
	}

	set size(value) {
		if (typeof value !== 'number') {
			throw new Error('size must ba number');
		}
		this._size = value;
	}

	get location() {
		return this._location;
	}

	set location(value) {
		if (typeof value !== 'string') {
			throw new Error('Location must be string');
		}
		this._location = value;
	}

	valueOf() {
		return this._size;
	}

	toString() {
		return this._location;
	}
}
