import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  player: any;
  playList: Video[] = [];
  stopped: boolean = true;

  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
    this.playList = [{
      id: "vDYbjAVp1bM",
      title: "قيامة أرطغرل - الموسم الثاني - الحلقة 20 ",
    },
    {
      id: "LeiOFwjRzZc",
      title: "قيامة أرطغرل - الموسم الثاني - الحلقة 21 ",

    },
    {
      id: "ROqfjAEkBvc",
      title: "قيامة أرطغرل - الموسم الثاني - الحلقة 22 ",

    },
    {
      id: "mdd2qtasUB0",
      title: "قيامة أرطغرل - الموسم الثاني - الحلقة 23 ",

    },
    {
      id: "2wbGEyVNBiM",
      title: "قيامة أرطغرل - الموسم الثاني - الحلقة 24 ",

    }
    ]

  }

  play(id){
    this.youtube.openVideo(id);
  }
}

export interface Video {
  id: string;
  title: string;
  img?: string;
}

