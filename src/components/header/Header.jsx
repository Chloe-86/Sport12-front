
import "./header.css";

const Header = ({ onViewChange }) => {
  return (
    <header className="header">
      <h1 className="logo">
        <img className="logoimg" src="src/assets/img/logo.svg" alt="logo" />
        <img className="logotext" src="src/assets/img/logotext.svg" alt="logotext" />
      </h1>
      <nav>
        <ul>
          <li>
            <button className="navlink" onClick={() => onViewChange("Accueil")}>
              Accueil
            </button>
          </li>
          <li>
            <button className="navlink" onClick={() => onViewChange("Settings")}>
              Réglages
            </button>
          </li>
          <li>
            <button className="navlink" onClick={() => onViewChange("Profil")}>
              Profil
            </button>
          </li>
          <li>
            <button className="navlink" onClick={() => onViewChange("Communauté")}>
              Communauté
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
