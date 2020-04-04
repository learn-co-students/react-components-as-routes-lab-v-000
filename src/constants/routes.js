import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Home from "../components/Home";
import Movies from "../components/Movies";

export default [
  { path: "/", component: Home, exact: true, label: "Home" },
  { path: "/movies", component: Movies, label: "Movies" },
  { path: "/actors", component: Actors, label: "Actors" },
  { path: "/directors", component: Directors, label: "Directors" },
];
