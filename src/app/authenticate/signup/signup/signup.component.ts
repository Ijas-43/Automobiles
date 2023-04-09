import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthService){}
  state: any=[];
  city: any=[];

  ngOnInit(): void {
    this.state = this.auth.state();

  }
  onSelect(state: any){
    this.city = this.auth.city().filter((e) => e.state == state.target.value);
  }

}
