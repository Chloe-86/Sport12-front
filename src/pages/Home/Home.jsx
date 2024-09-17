import { useState } from "react";
import { useAppContext } from "../../user/AppContext";
import "./home.css";

const Home = ({onViewChange}) => {
  const { setId } = useAppContext();
  const [selectedId, setSelectedId] = useState(null);

  const handleButtonClick = (id) => {
    setId(id);
    setSelectedId(id);
    onViewChange("Profil");
  };

  return (
    <div className="home">
      <p className="title">Bienvenue chez SportSee</p>
      <p className="question">Quel profil voulez-vous voir?</p>
      <div className="buttons">
        <button onClick={() => handleButtonClick(12)} className={`button ${selectedId === 12 ? "button-choosen button-selected" : ""}`}>
          Profil de Karl
        </button>
        <button onClick={() => handleButtonClick(18)} className={`button ${selectedId === 18 ? "button-choosen button-selected" : ""}`}>
          Profil de Cecilia
        </button>
      </div>
    </div>
  );
};

export default Home;
