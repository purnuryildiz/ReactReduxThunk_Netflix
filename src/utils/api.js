import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjU5YzI4YTRkNmYyZTBiNjlhMzViNmVhNmVjYTc3MyIsIm5iZiI6MTcyNzYwMTEwNi41NzM5NjgsInN1YiI6IjY2ZjkxODJkMzkzY2RhMWQxZGNjNDM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTtFhKZxROsk_XWxzdHYhdy4yE76qOWmTxah_K9LoJE",
  },
});

//popular veriler için:

///movie/popular

//kategori verileri:

///genre/movie/list

export default api;
