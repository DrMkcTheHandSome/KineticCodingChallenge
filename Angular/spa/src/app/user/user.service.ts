import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  createUser(data: any) {
    let url= "API_URL";
    let body=data;
    return this.http.post(url, body);
}

 updateUser(data: any) {
    let queryParameter={
        id: data.id
    }

    let url= `API_URL/${queryParameter.id}`
    let body=data;

    return this.http.put(url, body);
}

   getUserById(id: any) {
    let queryParameter={
        id: id
    }
    let url= `API_URL/${queryParameter.id}`
    return this.http.get<any>(url);
}

   
getWeatherForecast() {
  let url=`https://localhost:7104/WeatherForecast`;
  return this.http.get<any>(url);
}

}
