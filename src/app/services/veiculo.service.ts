import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }


  getInfo(){

    const url = `${environment.URL_BASE}`
    return this.http.get<any>(url).pipe(
      map(Response => {
        debugger
        return Response
      })
    )

  }
}
