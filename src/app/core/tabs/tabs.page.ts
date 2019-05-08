import { Component } from '@angular/core';
import { pagesMapping } from '../../shared/config';
import { Page } from '../../shared/type';

@Component({
  selector: 'app-core-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  pagesMapping: Array<Page> = pagesMapping;
}
