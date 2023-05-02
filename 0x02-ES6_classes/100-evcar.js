import { Car } from './10-car';

export class EVCar extends Car {
	constructor(brand, motor, color, range) {
		super(brand, motor, color);
		this._range = range;
	}

	get range() {
		return this._range;
	}

	cloneCar() {
		const car = super.cloneCar();
		return Object.setPrototypeOf(car, Car.prototype);
	}
}
