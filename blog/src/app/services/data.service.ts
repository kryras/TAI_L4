import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private url = 'https://jsonplaceholder.typicode.com';
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  get(id) {
    // return this.http.get(this.url + '/photos/' + id);
    return this.http.get(this.url + '/api/posts/' + id);
  }

  getAll() {
    // return this.http.get(this.url + '/photos');
    return this.http.get(this.url + '/api/posts');
  }

}
