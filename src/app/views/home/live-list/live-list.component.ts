import { Component } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent {

  livesPrevius!: Live[];

  constructor(public liveService: LiveService){}

  getLives(){
    this.liveService.getLivesWithFlag('previus').subscribe(
      data => {
        this.livesPrevius = data.content;
        console.log(this.livesPrevius);
      }
    );
  }

}
