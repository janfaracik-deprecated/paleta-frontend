import { Injectable } from '@angular/core';
import { ColorCollection } from './color-collection';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor() { }

	//colorCollections = [this.http.get<ColorCollection[]>('/api/employees');]
	colorCollections = [new ColorCollection('Banana', '#00d3f3'),
		new ColorCollection('The National', '#a2a2a2'),
		new ColorCollection('Half way there', '#ff8c1d')];

	public addColorCollection(newColorCollection: ColorCollection) {
		//this.colorCollections = this.http.post<Employee[]>('/api/addemployee', newEmployee);
		console.log("Added succesfully");
	}

}
