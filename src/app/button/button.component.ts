import { Component, OnInit } from '@angular/core';
import {NameService} from '../name.service'

@Component({
  moduleId: module.id,
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private nameService: NameService) { }

  ngOnInit() {
  }
  
  handleClick(){
    var res = this.nameService.getNames().map(v => v);
    this.nameService.selected = res[Math.floor(Math.random()*res.length)].name
  }
}
