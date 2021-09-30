import { Component, OnInit, Input } from '@angular/core';
import Video from '../../models/Video';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  // video list received from parent component  
  @Input() videoList: Video[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
