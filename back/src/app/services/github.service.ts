import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { ErrorHandler } from 'src/app/shared/app.erro-handler';


@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'f434f003783d56458fb3';
  private client_secret = 'e0a7920071c05064df85ca5443ad773c5c4a3b69';


  constructor(private http: Http) {
    this.username = 'Gabriel10Velloso';
}


  getUsers() {
    return this.http.get('https://api.github.com/users/' + this.username
          + '?client_id=' + this.client_id
          + '&client_secret=' + this.client_secret)
                 .map(res => res.json())
                 .catch(ErrorHandler.handleError);
  }

  getRepose() {
    return this.http.get('https://api.github.com/users/' + this.username
         + '/repos?per_page=100&client_id=' + this.client_id
          + '&client_secret=' + this.client_secret)
           .map(res => res.json())
           .catch(ErrorHandler.handleError);
  }

  getFollowings() {
    return this.http.get('https://api.github.com/users/' + this.username
          + '/following?per_page=100&client_id=' + this.client_id
          + '&client_secret=' + this.client_secret)
           .map(res => res.json())
           .catch(ErrorHandler.handleError);
  }

  getStars() {
    return this.http.get('https://api.github.com/users/' + this.username
          + '/starred?per_page=100&client_id=' + this.client_id
          + '&client_secret=' + this.client_secret)
           .map(res => res.json())
           .catch(ErrorHandler.handleError);
  }

  updateUsername(username: string) {
    this.username = username;
  }
}
