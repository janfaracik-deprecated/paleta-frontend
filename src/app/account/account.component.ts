import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	@ViewChild(DialogComponent) dialog: DialogComponent;
	show() {
		this.dialog.show();
		setTimeout(() => {
			if (document.getElementById('account-dialog')) {
				document.getElementById('account-dialog').addEventListener('scroll', function() {
					var size = Math.min(Math.max(30, 100 - (this.scrollTop * 1.2)), 200);
					var opacity = this.scrollTop / 10;
					var accountBackground = Math.min(0, - this.scrollTop)
					document.getElementById('account-image').setAttribute("style", "width: " + size + "px; height: " + size + "px;");
					document.getElementById('account-title-bar').setAttribute("style", "opacity: " + opacity + ";");
					document.getElementById('account-bg-container').setAttribute("style", "top: " + accountBackground + "px;");
				});
			}
		}, 100);
	}

}
