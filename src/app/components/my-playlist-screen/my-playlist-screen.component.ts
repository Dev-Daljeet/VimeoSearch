import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/services/user-data.service';
import Video from '../../models/Video';

@Component({
  selector: 'app-my-playlist-screen',
  templateUrl: './my-playlist-screen.component.html',
  styleUrls: ['./my-playlist-screen.component.css']
})
export class MyPlaylistScreenComponent implements OnInit {

  // a message to display if there are no videos
  playlistErrorMessage:string = '';

  videoPlaylist: Video[] = [];

  constructor(private userDataService: UserDataServiceService) { }

  ngOnInit(): void {
    this.userDataService.videoPlaylistObservable.subscribe((data) => {
      this.videoPlaylist = data;
    });
  }

  // clear the playlist
  clearPlaylist = () => {
    this.userDataService.clearVideoPlaylist();
  }

  // display the no videos in playlist message
  displayNoVideosMessage = () => {
    return this.userDataService.videoPlaylist.length <= 0;
  }


}
