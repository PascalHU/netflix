import "./App.css";
import movie from "./assets/data/netflix.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        {movie.map((data, index) => {
          return (
            <Section
              key={index}
              category={data.category}
              images={data.images}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
