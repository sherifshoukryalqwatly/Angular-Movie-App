import { MoviesService } from './../../services/movies-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
    movies: any[] = [];
    movieSlides: any[][] = []; // <-- array of arrays (5 movies per slide)
  constructor(private MoviesService:MoviesService , private cdr:ChangeDetectorRef){}

  ngOnInit() {

    // Or: get popular movies
    this.MoviesService.getPopularMovies().subscribe((res) => {

      this.movies = res.results;
      for (let i = 0; i < this.movies.length; i += 5) {
        this.movieSlides.push(this.movies.slice(i, i + 5));
      }
      this.cdr.detectChanges();
      console.log(this.movies);

    });
  }
}
