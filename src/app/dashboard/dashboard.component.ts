import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
declare var functionality: any;
declare var srcollEnterance: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(public router: Router, public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    functionality();

  }
  ngAfterViewInit(): void {
    // srcollEnterance();
    // this.changeDetectorRef.detectChanges();
    // this.loadScript('../assets/js/jquery-3.2.1.min.js');
    // this.loadScript('../assets/js/script.js');
    // this.loadScript('../assets/js/bootstrap.min.js');
    // this.loadScript('../assets/js/slick.js');
  }
  // public loadScript(url: string) {
  //   const body = document.body as HTMLDivElement;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   body.appendChild(script);
  // }
  navigateToListing(city, cusine) {
    // tslint:disable-next-line:object-literal-shorthand
    this.router.navigate(['/listing'], { queryParams: { city: city, cusine: cusine } });
  }
}
