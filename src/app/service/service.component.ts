import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor(private auth: AuthService) {}
  state: any = [];
  city: any = [];
  complaints: any = [];
  vehicle: any = [];
  brands: any = [];
  model: any = [];
  service: any = [];
  country: any = [];
  newtry: any = [];
  ngOnInit() {
    this.complaints = this.auth.complaints();
    this.service = this.auth.service();
    this.country = this.auth.country();
    this.vehicle = this.auth.vehicle();
  }
  select(country: any) {
    this.state = this.auth
      .state()
      .filter((e) => e.country == country.target.value);
  }
  onSelect(state: any) {
    this.city = this.auth.city().filter((e) => e.state == state.target.value);
  }
  click(vehicle: any) {
    this.brands = this.auth
      .brands()
      .filter((e) => e.vehicle == vehicle.target.value);
  }
  onClick(brands: any) {
    this.model = this.auth
      .model()
      .filter((e) => e.brand == brands.target.value);
  }

}
