import { Component, OnInit, Input } from '@angular/core';
import { UserDataServiceService } from '../../services/user-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  // attributes/data fields of Video object 
  @Input() videoId: string = '';
  @Input() previewImage: string = '';
  @Input() videoTitle: string = '';
  @Input() dateCreated: number = 0;
  @Input() numberOfViews: number = 0;
  @Input() nameOfCreator: string = '';
  @Input() profilePhotoOfCreator: string = '';

  urlOfVideo: string = "https://www.dailymotion.com/video/";

  constructor(private userDataService:UserDataServiceService) { }

  ngOnInit(): void {
  }

  // get the URL of video by combining the default URL and ID
  getVideoUrl = () => {
    return this.urlOfVideo+this.videoId;
  }

  // add video to playlist
  addVideoToPlaylist = () => {
    this.userDataService.addToPlaylist(this.videoId, this.previewImage, this.videoTitle, this.dateCreated, this.numberOfViews, this.nameOfCreator, this.profilePhotoOfCreator);
  }

  // check if video is present in playlist or not
  isPresentInVideoPlaylist = () => {
    return this.userDataService.videoPlaylist.find((video) => video.id === this.videoId) !== undefined;
  }

}
