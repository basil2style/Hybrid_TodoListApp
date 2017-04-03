import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the AddItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
  title;
  description;
  date;
  constructor(public navCtrl: NavController, public view: ViewController) {
    this.date = new Date().toISOString;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }


  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description,
      date: this.date
    };
 
    this.view.dismiss(newItem);
 
  }
 
 closeView() {
   this.view.dismiss();
 }
  close(){
    this.view.dismiss();
  }

}
