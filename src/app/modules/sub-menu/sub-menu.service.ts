import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubMenuService {

  currentMenu = 0;

  subject = new Subject();
  menuSubject$ = this.subject.asObservable();

  constructor() { }

  updateMenu(index: number): void {
    debugger;
    this.currentMenu = index;
    this.subject.next(this.currentMenu);
  }

}
