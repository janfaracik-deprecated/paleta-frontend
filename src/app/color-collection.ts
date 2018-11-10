export class ColorCollection {
	id: number;
	creatorId: number;
	name: string;
	hex: string;

	constructor(name, hex) {
		this.name = name;
		this.hex = hex;
	}

}
