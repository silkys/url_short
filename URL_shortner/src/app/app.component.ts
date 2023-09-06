import { Component, ViewChild  } from '@angular/core';
import { UrlDisplayComponent } from './url-display/url-display.component';
import { UrlInputComponent } from './url-input/url-input.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url_shortner';
  shortenedUrls: any = {};

}
