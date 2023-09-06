import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-url-display',
  templateUrl: './url-display.component.html',
  styleUrls: ['./url-display.component.css']
})
export class UrlDisplayComponent implements OnInit {

  constructor() { }
  @Input() shortenedUrls: any;


  ngOnInit(): void {
  }

}
