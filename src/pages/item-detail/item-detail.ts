import { Component } from '@angular/core';
import { NavParams,NavController, ViewController  } from 'ionic-angular';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  title;
  description;
  date;
  constructor(public navParams: NavParams,public view: ViewController){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.date = this.navParams.get('item').date;
  }


  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description,
      date: this.date
    };
 
    this.view.dismiss(newItem);
 
  }

 close(){
    this.view.dismiss();
  }
 
}