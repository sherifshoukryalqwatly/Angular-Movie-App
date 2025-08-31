import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { MoviesService } from './services/movies-service';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'movies/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,   // ✅ correct type
    async getPrerenderParams() {
      const svc = inject(MoviesService);
      const movies = await svc.getPopularMovies(1).toPromise();
      // return many params:
      return movies.results.map((m: { id: { toString: () => any; }; }) => ({ id: m.id.toString() }));
    }
  }
];
