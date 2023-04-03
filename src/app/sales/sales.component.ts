import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit{
  constructor(private auth: AuthService) {}
  vehicle:any=[];
  brands: any = [];
  model: any = [];
  details: any = [];
  city:any=[];
  ngOnInit(): void {
    this.vehicle = this.auth.vehicle();
    this.details =this.auth.details;
    this.city= this.auth.city();
  }

  click(vehicle:any){
    this.brands = this.auth.brands().filter((e) => e.vehicle==vehicle.target.value);
    this.details = this.auth.details.filter((a) => a.vehicle ==vehicle.target.value );
  }
  onClick(brands: any) {
    this.model = this.auth.model().filter((e) => e.brand == brands.target.value);
    this.details = this.auth.details.filter((n) => n.brands == brands.target.value);
  }
  models(variant: any) {
    this.details = this.auth.details.filter((m) => m.variant == variant.target.value);
  }
  citi(city: any){
this.details = this.auth.details.filter((c)=>  c.city == city.target.value);
  }

}





