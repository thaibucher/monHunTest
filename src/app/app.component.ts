import { Component } from '@angular/core';
import { MonstieTableComponent } from './monstie-table/monstie-table.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [MonstieTableComponent]
})
export class AppComponent {
  title = 'MonstieDex';
}
