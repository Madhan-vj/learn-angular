import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MydetailsService {

  constructor(private http: HttpClient) { }

  putData(data){
    console.log(data);
    return this.http.post<any>(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`,data);
  }
}
