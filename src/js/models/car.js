/* @flow */

let lastCarId = 10;

type CarParams = {
	id?: number,
	make: string,
	model: string,
	year: number,
	color: string,
	price: number,
}

export class Car {

	_id: number;
	_make: string;
	_model: string;
	_year: number;
	_color: string;
	_price: number;

	constructor({ id, make, model, year, color, price }: CarParams) {

		if (id) {
			this.id = id;
		} else {
			this.id = ++lastCarId;
		}
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		this.price = price;
	}

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}	

	get make(): string {
		return this._make;
	}

	set make(value: string) {
		this._make = value;
	}

	get model(): string {
		return this._model;
	}

	set model(value: string) {
		this._model = value;
	}

	get year(): number {
		return this._year;
	}

	set year(value: number) {
		this._year = value;
	}		

	get color(): string {
		return this._color;
	}

	set color(value: string) {
		this._color = value;
	}

	get price(): number {
		return this._price;
	}

	set price(value: number) {
		this._price = value;
	}		
}