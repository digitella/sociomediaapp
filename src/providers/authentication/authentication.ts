import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import{User} from '../../pages/user';

@Injectable()
export class AuthenticationProvider {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  apiurl='http://localhost:3000/api';
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();


  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  login(username: string, password: string) {
    return this.http.post<any>(this.apiurl+`/user`, { username:username, password:password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user=='Username or Password Incorrect..!!') {
             console.log('Username or Password Incorrect..!!');
             localStorage.setItem('state', '');
            }
            else{
              localStorage.setItem('currentUser', JSON.stringify(user));
              localStorage.setItem('state', '1');
             
              this.currentUserSubject.next(user);
            }

            return user;
        }));
}
setstatus(body)
{
  return this.http.put(this.apiurl+`/user/`+body.id,body);
}




logout() {
  
  localStorage.removeItem('currentUser');
  localStorage.setItem('state', '');
  this.currentUserSubject.next(null);
}

}