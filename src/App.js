import MyNav from "./components/MyNav";
import "./App.css";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";
function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <MyNav></MyNav>
      <LatestRelease></LatestRelease>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
