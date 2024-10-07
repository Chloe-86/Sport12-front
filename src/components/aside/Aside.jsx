import "./aside.css";

const Aside = () => {
  return (
    <div className="sideBar">
      <div className="activities">
        <img src="src/assets/icons/relax.svg" alt="relax icon" />
        <img src="src/assets/icons/swim.svg" alt="swim icon" />
        <img src="src/assets/icons/bike.svg" alt="bike icon" />
        <img src="src/assets/icons/muscu.svg" alt="haltere icon" />
      </div>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
};

export default Aside;
