import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack(): void {
    this.navCtrl.navigateBack(null);
  }

}
