import Currency from './3-currency';

export default class Pricing {
	constructor(amount, currency) {
		this,_amount = amount;
		this._currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(amount) {
		if (typeof amount !== "number") {
			throw new TypeError("Amount must be a number");
		}
		this._amount = amount;
	}

	get currency() {
		return this._currency;
	}

	set currency(currency) {
		if (!(currency instanceof Currency)) {
			throw new TypeError("Currncy must be an instance of Currency");
		}
		this._currency = currency;
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.displayFullCurrency()`;
		}`;
	}

		static convertPrice(amount, conversionRate) {
			if (typeof amount !== "number" || typeof conversionRate !== "number") {
				throw new TypeError("Amount and conversion rate must be numbers");
			}
			return amount * conversionRate;
		}
}
