import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SubMenuService {

  currentMenu = 0;

  constructor() { }

  updateMenu(index) {
    this.currentMenu = index;
    console.log('update: ' + index);
  }
}
