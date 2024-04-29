import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmMxYzU3NDYwYTZmODNhOWQ1NzViYTQ0MDEzNDVlYiIsInN1YiI6IjY2MWUzMzQ1Yjg0Y2RkMDE3ZDY0MGU2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pb2iPpY8MAIRo-vLKV8lnfDxgaAa-HwxaXAHQOiGDeU'
  }
})

export default instance; 