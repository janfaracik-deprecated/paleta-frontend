import { Component, OnInit, Input } from '@angular/core';
import { SwitchboardService } from '../switchboard.service';
import { ColorCollection } from '../color-collection';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-active-color',
	templateUrl: './active-color.component.html',
	styleUrls: ['./active-color.component.scss']
})
export class ActiveColorComponent implements OnInit {

	@Input() colorCollection: ColorCollection;
	switchboardService: SwitchboardService;
	subColorCollection: Subscription;

	constructor(switchboardService: SwitchboardService) {
		this.switchboardService = switchboardService;
	}

	ngOnInit(): void {
		this.subColorCollection = this.switchboardService.colorCollection$.subscribe((c) => {
			this.colorCollection = c;
		});
	}

	ngOnDestroy(): void {
		this.subColorCollection.unsubscribe();
	}

	// Copy
	copyHEX(): void {
		document.addEventListener('copy', (e: ClipboardEvent) => {
			e.clipboardData.setData('text/plain', ( this.colorCollection.hex ));
			e.preventDefault();
			document.removeEventListener('copy', null);
		});
		document.execCommand('copy');
	}

}
