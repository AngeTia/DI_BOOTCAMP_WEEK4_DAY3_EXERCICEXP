import { HttpClient } from '@angular/common/http';

export class ApiService {

  apiBaseRoot: string = 'https://api.example.com/users';

  constructor(private http : HttpClient) {
  }


  getUsers(){
    return this.http.get<Array<{name:string}>>(this.apiBaseRoot)
  }
}
