import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
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
  help: any = [];
  ngOnInit() {
    this.complaints = this.auth.complaints();
    this.service = this.auth.service();
    this.country = this.auth.country();
    this.vehicle = this.auth.vehicle();
    this.help = this.auth.help;
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

