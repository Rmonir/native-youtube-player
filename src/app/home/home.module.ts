import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [
    YoutubeVideoPlayer
    
  ]
})
export class HomePageModule {}
