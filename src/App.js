import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Rows from "./components/Rows";
import request from "./request";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={request.fetchNetflix} />
      <Rows
        title="Netflix Originals"
        fetchUrl={request.fetchNetflix}
        islargerow
      />
      <Rows title="Trending" fetchUrl={request.fetchTrending} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="Science Fiction" fetchUrl={request.fetchScienceFiction} />
    </div>
  );
}

export default App;
