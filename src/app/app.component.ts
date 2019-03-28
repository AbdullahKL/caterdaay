import { Component, AfterViewInit } from '@angular/core';
// declare var functionality: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'caterdaay';
  ngAfterViewInit(): void {
    // this.loadScript('../assets/js/script.js');
    this.loadScript('../assets/js/slick.js');
  }
  public loadScript(url: string) {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
