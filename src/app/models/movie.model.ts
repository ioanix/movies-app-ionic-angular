export class Movie {

  id: number;
  title = '';
  description = '';
  genre: Genre;
  duration: number;
  yearOfRelease: number;
  director: string;
  dateAdded: number;
  rating: number;
  watched: string;

}

export enum Genre {

  action,
  comedy,
  horror,
  thriller
}

export const MOVIE_GENRES = ['action', 'comedy', 'horror', 'thriller'];









