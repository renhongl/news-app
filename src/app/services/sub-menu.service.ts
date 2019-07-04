import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SubMenuService {

  currentMenu = new BehaviorSubject(0);
  currentMenuSubject = this.currentMenu.asObservable();

  constructor() { }

  updateMenu(index: number): void {
    this.currentMenu.next(index);
  }

}
