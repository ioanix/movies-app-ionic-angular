export class Movie {

  id: number;
  title: string;
  description: string;
  genre: Genre;
  duration: number;
  yearOfRelease: number;
  director: string;
  dateAdded: string;
  rating: number;
  watched: string;

}

export enum Genre {

  action,
  comedy,
  horror,
  thriller
}

export const movieGenres = ['action', 'comedy', 'horror', 'thriller'];









