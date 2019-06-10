import { Component, ViewChild } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { NewPaletteComponent } from './new-palette/new-palette.component';
import { DialogService } from './dialog.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'paleta-frontend';

	constructor(private dialogService: DialogService) { }

	@ViewChild(AccountComponent) accountDialog: AccountComponent;
	showAccount() {
		this.accountDialog.show();
	}

	@ViewChild(NewPaletteComponent) newPaletteDialog: NewPaletteComponent;
	showNewPalette() {
		this.newPaletteDialog.show();
	}

	showModal(id: string) {
        this.dialogService.open(id);
		console.log(id);
	}
}
