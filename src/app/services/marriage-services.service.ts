import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarriageServicesService {
  env = `https://mardetail.herokuapp.com/`
  // env = `http://localhost:3000/`

  validLogin = new Subject();
  getMarriageDataSub = new Subject();
  constructor(public http: HttpClient) { }


  registration(regData: any): Observable<any> {
    let url = this.env+'Register';
    return this.http.post(url, regData, {responseType: 'text'}).pipe(map((res : any) => {
      console.log(res,"result")
    }));
  }

  login(paylod: { email: any; password: any; }): Observable<any> {
    let url = this.env+`login`;
    let result = this.http.post(url, paylod, {responseType: 'text'}).pipe(map((res : any) => res));
    return result;
  }

  marriageData(payload: { firstname: any; lastname: any; location: any; Veggie: any; chicken: any; mutton: any; fish: any; total: any; }): Observable<any> {
    let url = this.env+`Marriagedata`;
    let result = this.http.post(url,payload, {responseType: 'text'}).pipe(map((res : any) => res));
    return result;
  }

  getMarriageData(): Observable<any> {
    let url = this.env+`Marriagedata`;
    let result = this.http.get(url).pipe(map((res : any) => res));
    return result;
  }

  sendValidLogin(flag: any) {
    this.validLogin.next(flag);
  }

  showMarriageData(flag: boolean) {
    this.getMarriageDataSub.next(flag);
  }
}
