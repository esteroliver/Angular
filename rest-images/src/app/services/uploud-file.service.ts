import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploudFileService {
  private apiUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(this.apiUrl + "hello", {responseType: 'text'});
  }

  postFile(username : string, formData: FormData):Observable<Object>{
    const file : any = formData.get("arquivo");
    console.log(file);
    return this.http.post(this.apiUrl + "user/" + username + "?file=" + file, {responseType: 'Object'});
  }
}
