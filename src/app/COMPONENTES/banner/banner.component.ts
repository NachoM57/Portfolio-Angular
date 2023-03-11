import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: Banner[] = [];

  constructor(private bannerService: BannerService,public router: Router) {}

 

 ngOnInit(): void  {
 this.agregarBanner();
 }

agregarBanner(): void{
this.bannerService.lista().subscribe(data => {this.banner = data;})
}

}
