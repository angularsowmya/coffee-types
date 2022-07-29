import { Coffee } from './../coffee-model/coffee-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//inject
@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) {

  }

  ngOnInit(){
    this.getCoffeeTypes();
  }

  getCoffeeTypes() : Observable<any>
  {
    return new Observable(observer => {
      this.http.get('https://random-data-api.com/api/coffee/random_coffee?size=50').subscribe({
        next : (data : any)=> {
          observer.next(data);
          observer.complete();
        },
        error : (err : Error) => {
          observer.next(null);
          observer.complete();
        },
      })
    });
  }
}

