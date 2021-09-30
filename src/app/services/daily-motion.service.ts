import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import FullVideoResponse from '../models/FullVideoResponse';

@Injectable({
  providedIn: 'root'
})

export class DailyMotionServiceService {

  constructor(private http: HttpClient) { }

  getVideosFromDailyMotionAPI = (searchKeyword: string): Observable<FullVideoResponse> => {
    return this.http.get<FullVideoResponse>(`https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=${searchKeyword}`);
    }

}
