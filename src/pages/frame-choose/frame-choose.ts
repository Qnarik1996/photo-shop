import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Slide } from 'ionic-angular/components/slides/slide';


@Component({
  selector: 'page-frame-choose',
  templateUrl: 'frame-choose.html',
})
export class FrameChoosePage {
  @ViewChild(Slides) slides:Slides;
  pageName;
  text;
  cardInformation:any[];
  showall=false;
  holiday=['Christmas','Valentine','Birtday','Holly','Frame','Christmas','Valentine','Birtday','Holly','Frame']
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public vewCtrl:ViewController
              ) {
                this.pageName=this.navParams.get('pageName');
                this.initializeItems();
  }
  initializeItems() {
    this.cardInformation=[
      {image: 'assets/imgs/christmas.png',
       name:"Christmas",
       count:3,
       price:30,
      delivery: 5,
      open:false,
      photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/valentine.jpg',
    name:"Valentine",
    count:1,
    price: 10,
    delivery: 5 ,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/birday.png',
    name:"Birtday",
    count:5,
    price:50,
    delivery:5,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/holly.jpg',
    name:"Holly",
    count:6,
    price:60,
    delivery:5,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/frame.jpg',
    name:"Frame",
    count:4,
    price:40,
    delivery:5,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/christmas.png',
    name:"Christmas",
    count:3,
    price:30,
    delivery: 5,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/valentine.jpg',
    name:"Valentine",
    count:1,
    price: 10,
    delivery: 5 ,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/birday.png',
    name:"Birtday",
    count:5,
    price:50,
    delivery:5,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/holly.jpg',
    name:"Holly",
    count:6,
    price:60,
    delivery:5,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    },
    {image: 'assets/imgs/frame.jpg',
    name:"Frame",
    count:4,
    price:40,
    delivery:5,
    open:false,
    photos:["assets/imgs/christmas.png","assets/imgs/christmas2.jpg","assets/imgs/cristmas1.jpg"]
    }
    
    ]
  }


  close(){
    this.vewCtrl.dismiss()
  }
  
  
  show(){
    
     this.showall=true
  }
  equalValue(item,ev){
    this.text=item;
    this.getItems(ev)
  }
  getItems(ev: any) {
    this.initializeItems();
    let val = this.text;
    if (val && val.trim() != '') {
      this.cardInformation = this.cardInformation.filter((item) => {
        return (item.name.toLowerCase().startsWith(val.toLowerCase()));
      })
    }
  
  }
  openSlide(iner){
    this.openClose()    
    iner.open = !iner.open;    
  }
  goToSlide(item) {
    this.slides.slideNext(500);
    
  }
  backSlide(){
    this.slides.slidePrev(500)
  }
  openClose(){
    for(let i=0;i<this.cardInformation.length;i++){
      if(this.cardInformation[i].open==true){
        this.cardInformation[i].open=false
      }
      
    }
  }
}
