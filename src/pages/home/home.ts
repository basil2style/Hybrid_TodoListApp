import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { Data } from '../../providers/data';
import { ItemDetailPage } from '../item-detail/item-detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
   this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = JSON.parse(todos); 
      }
 
    });
  }


  ionViewDidLoad(){
 
    
  }
 
  addItem(){
       let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
  }
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  delete(item: number){
    print item
    this.items.splice(item,1);
  }
  viewItem(item){
  this.navCtrl.push(ItemDetailPage, {
    item: item
  });
}

 
}
