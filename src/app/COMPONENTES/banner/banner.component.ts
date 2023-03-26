import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: Banner[] = [];
 isLogged=false;

  constructor(private bannerService: BannerService,public router: Router, private tokenService: TokenService) {}

 

 ngOnInit(): void  {
 this.agregarBanner();
     if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }

agregarBanner(): void{
this.bannerService.lista().subscribe(data => {this.banner = data;})
}



}
