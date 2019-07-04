import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SubMenuService {

  currentMenu = new BehaviorSubject(0);
  currentMenu$ = this.currentMenu.asObservable();

  constructor() { }

  updateMenu(index: number): void {
    this.currentMenu.next(index);
  }

}
