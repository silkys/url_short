import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { UrlShortenerComponent } from '../url-shortener/url-shortener.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent  {
  @Input() originalUrl: string = '';
  @Output() shortenClicked: EventEmitter<string> = new EventEmitter<string>();




  constructor() { }


  emitShortenClicked(originalUrl: string) {
    debugger;
    console.log('emitShortenClicked called with originalUrl:', originalUrl);
    this.shortenClicked.emit(originalUrl);
  }

}









