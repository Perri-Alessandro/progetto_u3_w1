import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooterComponent";
import Welcome from "./components/WelcomeComponent";
import MyNav from "./components/MyNav";
import Film from "./components/Film";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main className="bg-dark">
        <Welcome></Welcome>
        <Film />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
