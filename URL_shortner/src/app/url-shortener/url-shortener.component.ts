import { Component, OnInit, Input } from '@angular/core';
import { ShortenUrlService } from '../shorten-url.service';
import { UrlInputComponent } from '../url-input/url-input.component';
import { UrlDisplayComponent } from '../url-display/url-display.component';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent{
  response: any;
  // originalUrl!: string;
  shortenedUrls: any = {};


  constructor(private shortenUrlService: ShortenUrlService) {}

  onShortenClicked(originalUrl: string) {
    console.log('onShortenClicked called with originalUrl:', originalUrl);
    this.shorten(originalUrl);
  }

  /*shorten(originalUrl: string) {
    console.log('shorten called with originalUrl:', originalUrl);

    this.shortenUrlService.shortenUrl(originalUrl).subscribe(
      (response) => {
        // Handle the shortened URL response
        this.shortenedUrls = response.result.short_link; // Assuming the API response has a 'result' property
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error as needed
      });
  }*/
  shorten(originalUrl: string) {
    console.log('shorten called with originalUrl:', originalUrl);

    this.shortenUrlService.shortenUrl(originalUrl).subscribe(
      (response) => {
        // Handle the shortened URL response
        this.shortenedUrls = response.result.short_link; // Assuming the API response has a 'result' property
      },
      (error) => {
        console.error('Error:', error); // Log the error to the console
        // Handle the error as needed
      }
    );
  }

}
