import { useState} from "react";
import Header from "./components/header/Header";
import Aside from "./components/Aside/Aside";
import Board from "./components/board/Board";
import "./app.css";

function App() {
  const [activeView, setActiveView] = useState("Accueil");

  return (
    <div className="container">
      <Header onViewChange={setActiveView} />
      <Aside />
      <main>
        <Board activeView={activeView} onViewChange={setActiveView} />
      </main>
    </div>
  );
}

export default App;
