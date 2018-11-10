import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColorCollection } from './color-collection';


@Injectable({
	providedIn: 'root'
})
export class SwitchboardService {

	constructor() { }

	private colorCollectionWatcher = new Subject<ColorCollection>();
	public colorCollection$ = this.colorCollectionWatcher.asObservable();

	public selectColorCollection(colorCollection: ColorCollection) {
		this.colorCollectionWatcher.next(colorCollection);
	}

}
