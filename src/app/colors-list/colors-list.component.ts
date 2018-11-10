import { Component, OnInit } from '@angular/core';
import { ColorCollection } from '../color-collection';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-colors-list',
	templateUrl: './colors-list.component.html',
	styleUrls: ['./colors-list.component.scss']
})
export class ColorsListComponent implements OnInit {

	selectedColorCollection: ColorCollection;
	dataService: DataService;
	switchboardService: SwitchboardService;

	constructor(dataService: DataService, switchboardService: SwitchboardService, private titleService: Title) {
		this.dataService = dataService;
		this.switchboardService = switchboardService;
	}

	onSelect(newColorCollection: ColorCollection): void {
		if (newColorCollection != this.selectedColorCollection) {
			this.selectedColorCollection = newColorCollection;
			this.switchboardService.selectColorCollection(this.selectedColorCollection);
			this.setTitle(this.selectedColorCollection.name + " - Paleta");
		} else {
			this.selectedColorCollection = null;
			this.switchboardService.selectColorCollection(null);
			this.setTitle("Paleta");
		}
	}

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	ngOnInit() { }

}
