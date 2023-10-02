import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div>
      <Home />
      <MoviesList />
    </div>

    // <div className="App">
    //   <h1> CINESCAPE </h1>
    //   <p> New destination for pleasure in Kuwait </p>
    //   <img
    //     className="imgdesign "
    //     src="https://248am.com//images/2018/08/cinescape.jpg"
    //   />

    // </div>
  );
}

export default App;
