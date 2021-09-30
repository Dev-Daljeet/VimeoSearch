import { Component, OnInit } from '@angular/core';
import { DailyMotionServiceService } from 'src/app/services/daily-motion.service';
import Video from '../../models/Video';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  // video list from search result
  videoList: Video[] = [];

  // search keyword inputted by user
  searchKey: string = "";

  constructor(private dailyMotionServiceService: DailyMotionServiceService) { }

  ngOnInit(): void {
  }

  // get videos from the API
  getVideosFromAPI = () => {
    if(this.searchKey.length > 0) {
      this.dailyMotionServiceService.getVideosFromDailyMotionAPI(this.searchKey).subscribe((data) => {
        console.log("Got video data from the api");
        this.videoList = data.list;
      })
    }
    else
    {
      alert("Please enter a video name in the search field!")

    }
  }

}
