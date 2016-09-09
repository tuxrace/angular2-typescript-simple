import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
  names: {string}[]
  selected: string
  
  constructor() { }
  
  getNames(){
    return  [
      {name:'aida'},
      {name:'lorna'},
      {name:'fe'}
    ]
  }

}
