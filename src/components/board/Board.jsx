
import Profil from "../../pages/Profil";
import Home from "../../pages/Home/Home";
import Settings from "../../pages/Settings";
import Community from "../../pages/Community"; // Assure-toi que ce chemin est correct
import "./board.css";


const Board = ({ activeView, onViewChange }) => {
  return (
    <div className="board">
        {activeView === "Profil" && <Profil />}
        {activeView === "Accueil" && <Home onViewChange={onViewChange}/>}
        {activeView === "Settings" && <Settings />}
        {activeView === "Communauté" && <Community />}
    </div>
  );
};

export default Board;
