import "./App.css";
import SearchBar from "./components/moldecules/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar
        placeholder={"Search"}
        onSearch={() => {
          console.log("Searched");
        }}
      />
    </div>
  );
}

export default App;
