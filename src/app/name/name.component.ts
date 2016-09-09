import { Component, OnInit } from '@angular/core';
import {NameService} from '../name.service'
import {ButtonComponent} from '../button/button.component'

@Component({
  moduleId: module.id,
  selector: 'app-name',
  templateUrl: 'name.component.html',
  styleUrls: ['name.component.css'],
  directives: [ButtonComponent]
})
export class NameComponent implements OnInit {
  
  constructor(private nameService: NameService) { }
  
  ngOnInit() {
    console.log(this.nameService.getNames())
  }

}
