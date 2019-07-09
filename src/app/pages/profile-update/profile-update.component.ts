import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/shared/type';
import { addPrefix, updateSession } from 'src/app/shared/utils';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-page-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss'],
})
export class ProfileUpdateComponent implements OnInit {

  id: string;
  username: string;
  intro = new Subject();
  place = new Subject();
  avator = new Subject();

  intro$ = this.intro.asObservable();
  place$ = this.place.asObservable();
  avator$ = this.avator.asObservable();

  introStr: string;
  placeStr: string;
  avatorStr: string;

  constructor(
    private location: Location,
    @Inject('userService') private userService
  ) { }

  ngOnInit() {
    const user = JSON.parse(sessionStorage.getItem('aikan')).user;
    this.id = user._id;
    this.username = user.username;
    this.introStr = user.intro;
    this.placeStr = user.place;
    this.avatorStr = addPrefix(user.avator);

    this.intro$.pipe(debounceTime(1000)).subscribe(intro => {
      this.handleSubmit('intro', intro);
    });

    this.place$.pipe(debounceTime(1000)).subscribe(place => {
      this.handleSubmit('place', place);
    });

    this.avator$.pipe(debounceTime(1000)).subscribe(avator => {
      this.handleSubmit('avator', avator);
      this.avatorStr = addPrefix(avator);
    });
  }

  handleAvator(e) {
    const file = e.srcElement.files[0];
    this.userService.uploadImg('avator', file).subscribe(result => {
      if (result.code === 200) {
        this.avator.next(result.imagePath);
      } else {
        console.log(result.message);
      }
    });
  }

  handleUsername(e) {
  }

  handleIntro(e) {
    this.intro.next(e.target.value);
  }

  handlePlace(e) {
    this.place.next(e.target.value);
  }

  handleSubmit(key, value) {
    this.userService.updateUser(this.id, {[key]: value}).subscribe(res => {
      if (res.code === 200) {
          updateSession(key, value);
      }
    });
  }

  goBack() {
    this.location.back();
  }

}
