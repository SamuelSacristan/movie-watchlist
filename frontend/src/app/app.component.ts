import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie/movie.service';  // Adjust path if needed
import { HttpClientModule } from '@angular/common/http';  // Import necessary modules
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HttpClientModule]  // Import any necessary modules
})
export class AppComponent implements OnInit {
  title = 'Movie Watchlist';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }
}

