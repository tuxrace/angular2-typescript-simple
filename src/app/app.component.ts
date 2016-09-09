import { Component } from '@angular/core';
import {NameComponent} from './name/name.component'
import {NameService} from './name.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NameComponent],
  providers:[NameService]
})
export class AppComponent {
  title = 'Lol';
}
