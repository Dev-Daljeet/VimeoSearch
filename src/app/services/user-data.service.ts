import { Injectable } from '@angular/core';
import Video from '../models/Video';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  videoPlaylist: Video[] = [];

  videoPlaylistObservable = new BehaviorSubject<Video[]>([]);

  constructor() { }

  addToPlaylist = (videoId:string, previewImage:string, videoTitle:string, dateCreated:number, numberOfViews:number, nameOfCreator:string, profilePhotoOfCreator:string) => {
    console.log("Hello")
    let video = {
      id: videoId,
      thumbnail_360_url: previewImage,
      views_total: numberOfViews,
      created_time: dateCreated,
      title: videoTitle,
      "owner.username": nameOfCreator,
      "owner.avatar_80_url": profilePhotoOfCreator
    };
    this.videoPlaylist.push(video);
    this.videoPlaylistObservable.next(this.videoPlaylist); 
  }

  getVideoPlaylist = () => {
    return this.videoPlaylist;
  }

  clearVideoPlaylist = () => {
    this.videoPlaylist = [];
    this.videoPlaylistObservable.next(this.videoPlaylist); 
  }
}
