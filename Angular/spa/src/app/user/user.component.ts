import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  userName: string = "jbond";
  itemImageUrl = 'https://media.gq.com/photos/624356f6d3c1606db058cea2/16:9/w_1920,c_limit/81609466';

  locations: any[] = [
    {
      id: 1,
      name: 'Philadelphia'
    },
    {
      id: 2,
      name: 'Los Angeles'
    }
  ];
  
  weatherForecasts: any[] = [];

  constructor(private userService: UserService,
    private cdr: ChangeDetectorRef){}
  
  ngOnInit(){
   this.userService.getWeatherForecast().subscribe(result => {
     this.weatherForecasts = result;
     this.cdr.detectChanges();
   }, error => {
    console.log(error);
   })
  }

  onSubmit() {
    console.warn(this.userForm.value);
  }


}
