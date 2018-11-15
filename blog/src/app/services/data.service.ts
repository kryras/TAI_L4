import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  get(id) {
    return this.http.get(this.url + '/photos/' + id);
  }

  getAll() {
    return this.http.get(this.url + '/photos');
  }

}
