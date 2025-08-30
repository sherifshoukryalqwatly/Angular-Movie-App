import { CommonModule } from '@angular/common';
import { MoviesService } from './../../services/movies-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-move-details',
  imports: [CommonModule],
  templateUrl: './move-details.html',
  styleUrl: './move-details.css'
})
export class MoveDetails implements OnInit{
  movie:any;
  movieId:number|null=null;
  loading:boolean=true;
  constructor(private route:ActivatedRoute,private MoviesService:MoviesService,private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.movieId) {
      this.MoviesService.getMovieDetails(this.movieId).subscribe({
        next: (res) => {
          this.movie = res;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  }

}
