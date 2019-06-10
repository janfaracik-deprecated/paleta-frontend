import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-palettes-list',
	templateUrl: './palettes-list.component.html',
	styleUrls: ['./palettes-list.component.scss']
})
export class PalettesListComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@Output() showAccount = new EventEmitter();

	callParent() {
		this.showAccount.emit(null);
	}

}
