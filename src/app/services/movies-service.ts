import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'e570a0e785a67483c5c20ca4782af6d1';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http:HttpClient){}

  getAllMovies():Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}`
    );
  }

  getPopularMovies(page: number):Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/popular`,{
        params:{
          api_key:'e570a0e785a67483c5c20ca4782af6d1',
          page:page
        }
      }
    );
  }

  searchMovies(query: string, page: number = 1) {
  return this.http.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
      api_key: 'e570a0e785a67483c5c20ca4782af6d1',
      query: query,
      page: page
    }
  });
}
}
