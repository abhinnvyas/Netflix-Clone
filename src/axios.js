import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// To get a URL you could do something like this --->
// instance.get("/url")

export default instance;
