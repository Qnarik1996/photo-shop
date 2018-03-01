import {Component, Input} from '@angular/core';
@Component({
    selector:'other-header',
    template:`
    <ion-header>
    <ion-navbar>
            <div>
                    <button menuToggle ion-button icon-only>
                        <ion-icon md="md-menu" ios="md-menu"></ion-icon>
                    </button>
                </div>
                <div class="title-name">
                <span>{{pageName}}</span>
                </div>
    </ion-navbar>
</ion-header>
    `,
    styles:[
        `
      
        ion-navbar{
            height: 9vh;
        }
        .bar-button-default-ios, .bar-button-default.bar-button-ios-default, .bar-button-clear-ios-default{
            font-size: 3vh;
            color: #999;
           
        }
        .title-name{
           text-align:center;
            font-size: 1.6em;
            
        }
        .toolbar-content{
            align-items: center;
            display: flex;
        }
        button{
            float: left
        }
        `
    ]
})
export class OtherHeader{
    @Input() pageName;
}