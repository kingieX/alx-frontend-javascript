const CLONE_CAR_SYMBOL =Symbol('cloneCar');

class car {
	constructor(brand, motor, color) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
		this[CLONE_CAR_SYMBOL] = this.cloneCar.bind(this);
	}

	get brand() {
		return this._brand;
	}

	set brand(value) {
		this._brand = value;
	}

	get motor() {
		return this._motor;
	}

	set motor(value) {
		this._motor = value;
	}

	get color() {
		return this._color;
	}

	set color(value) {
		this._color = value;
	}

	cloneCar() {
		const clone = new Car(this._brand, this._motor, this._color);
		Object.getOwnPropertySymbols(this).forEach((symbol) => {
			if (symbol !== CLONE_CAR_SYMBOL) {
				clone[symbol] = this[symbol];
			}
		});
		return clone;
	}
}
