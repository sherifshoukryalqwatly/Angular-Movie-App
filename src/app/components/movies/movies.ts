import { CommonModule } from '@angular/common';
import { MoviesService } from './../../services/movies-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies implements OnInit {
  movies: any[] = [];
  total_pages: number = 0;
  searchTerm: string = '';
  loading: boolean = false;


  // Pagination
  currentPage: number = 1;

  constructor(private moviesService: MoviesService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  loadMovies(page: number = 1) {
    this.loading = true;
    this.moviesService.getPopularMovies(page).subscribe({
      next: (res: any) => {
        this.movies = res.results;
        this.total_pages = res.total_pages;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  onSearch() {
      if (this.searchTerm.trim() === '') {
        this.loadMovies(this.currentPage);
      } else {
        this.loading = true;
        this.moviesService.searchMovies(this.searchTerm, this.currentPage).subscribe({
          next: (res: any) => {
            this.movies = res.results;
            this.total_pages = res.total_pages;
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

  changePage(page: number) {
    if (page >= 1 && page <= this.total_pages) {
      this.currentPage = page;
      // reload movies from API with new page
      this.loadMovies(page);
    }
  }
  get visiblePages(): number[] {
  const total = this.total_pages;
  const current = this.currentPage;
  const maxVisible = 5;

  // calculate start page
  let start = Math.max(1, current - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  // adjust if end exceeds total
  if (end > total) {
    end = total;
    start = Math.max(1, end - maxVisible + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
}
