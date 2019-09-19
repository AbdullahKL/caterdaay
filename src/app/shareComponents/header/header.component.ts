import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  User:any=null;
  Countrys:any;
  Signin:boolean= true;
  Countryname:string= "asdasdasdasd";
  constructor(public userService:UserService,private toastr: ToastrService) { }
  showCart = false;
  ngOnInit() {
    this.getCountries();
    this.Signin= true;
    this.userService.checkCurrentUser.subscribe(res =>{
      this.Signin = !res;
      console.log("hit");
   });
  }
  onSignout(){
    this.userService.removeUser();
    this.userService.UserUpdate(false);
    this.toastr.success("Sign Out")
  }
  cartBoxAction(e: Event) {
    e.stopPropagation();
    e.preventDefault();
    this.showCart = !this.showCart;
  }
  checkUser(){
    this.User = this.userService.getUser();
      if(!this.User === null){
        this.Signin = false;
      }
  }
  getCountries(){
   this.userService.GetCountryList().subscribe((data:any)=>
   {
     this.Countrys=data.message;
     for(let i = 0 ; i < this.Countrys.length;i++){
       console.log(this.Countrys[i].countryName);
     }
     console.log(this.Countrys)
    },error=>{
      console.log(error)
    })
  }
 
  Change(selectedCountry: string){
    this.Countryname = selectedCountry;
  }
 
}
