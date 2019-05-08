import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SubMenuService {

  currentMenu = 0;

  constructor() { }

  updateMenu(index: number): void {
    this.currentMenu = index;
  }
}
