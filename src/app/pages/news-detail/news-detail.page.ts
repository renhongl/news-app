import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ActivatedRoute  } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
