import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
	selector: 'app-setup',
	templateUrl: './setup.component.html',
	styleUrls: ['./setup.component.scss'],
	animations: [
		trigger('slideInOut', [
			transition(':enter', [
				style({ transform: 'translate(-50%, -20%)', opacity: '0' }),
				animate('300ms 150ms ease', style({ transform: 'translate(-50%, -50%)', opacity: '1' }))
			]),
			transition(':leave', [
				animate('200ms ease', style({ transform: 'translate(-50%, -50%) scale(0.9)', opacity: '0'}))
			])
		])
	]
})
export class SetupComponent implements OnInit {

	step: String = 'initial';

	constructor() { }

	ngOnInit() {
	}

	changeStep(next_step: String) {
		this.step = next_step;
	}

}
