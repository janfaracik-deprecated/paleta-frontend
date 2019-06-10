import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { DialogService } from '../dialog.service';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
	animations: [
		trigger('slideInOut', [
			transition(':enter', [
				style({ transform: 'translate(-50%, 50vh)' }),
				animate('250ms cubic-bezier(0,.66,.41,1.16)', style({ transform: 'translate(-50%, -50%)' }))
			]),
			transition(':leave', [
				animate('200ms ease', style({ transform: 'translate(-50%, -50%) scale(0.8)', opacity: '0' }))
			])
		]),
		trigger('fadeInOut', [
			transition(':enter', [
				style({ opacity: '0' }),
				animate('300ms ease', style({ opacity: '1' }))
			]),
			transition(':leave', [
				animate('200ms ease', style({ opacity: '0' }))
			])
		])
	]
})
export class DialogComponent implements OnInit, OnDestroy {

	private element: any;

	@Input() id: string;
	isOpen: Boolean = false;

	constructor(private dialogService: DialogService, private el: ElementRef) {
		this.element = el.nativeElement;
	}

	ngOnInit(): void {
		let modal = this;

		// ensure id attribute exists
		if (!this.id) {
			console.error('modal must have an id');
			return;
		}

		// move element to bottom of page (just before </body>) so it can be displayed above everything else
		document.body.appendChild(this.element);

		// close modal on background click
		this.element.addEventListener('click', function(e: any) {
			if (e.target.className === 'jw-modal') {
				modal.hide();
			}
		});

		// add self (this modal instance) to the modal service so it's accessible from controllers
		this.dialogService.add(this);
	}

	// remove self from modal service when component is destroyed
	ngOnDestroy(): void {
		this.dialogService.remove(this.id);
		this.element.remove();
	}

	show() {
		this.isOpen = true;
	}

	hide() {
		this.isOpen = false;
	}

}
