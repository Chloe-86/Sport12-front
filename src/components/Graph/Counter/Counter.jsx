import { useState, useEffect } from "react";
import { adaptCounterInfos } from "../../../utils/adapter";
import "./counter.css";

const Counter = ({ dataUser, isMock }) => {
  const [counterInfos, setCounterInfos] = useState("0");


  useEffect(() => {
    if (dataUser) {
      const adaptedData = adaptCounterInfos(dataUser, isMock);
      setCounterInfos(adaptedData);
    }
  }, [dataUser, isMock]);

  
  return (
    <article className="counter">
      <div className="logoCounter" id="cal">
        <div className="leftpart">
          <img src="src/assets/icons/cal.svg" alt="icon feu" />
        </div>
        <div className="rightpart">
          <p>{counterInfos.calorieCount}kCal</p>
          <p>Calories</p>
        </div>
      </div>
      <div className="logoCounter" id="prot">
        <div className="leftpart">
          <img src="src/assets/icons/prot.svg" alt="" />
        </div>
        <div className="rightpart">
          <p>{counterInfos.proteinCount}g</p>
          <p>Proteines</p>
        </div>
      </div>
      <div className="logoCounter" id="glu">
        <div className="leftpart">
          <img src="src/assets/icons/glu.svg" alt="" />
        </div>
        <div className="rightpart">
          <p>{counterInfos.carbohydrateCount}g</p>
          <p>Glucides</p>
        </div>
      </div>
      <div className="logoCounter" id="lip">
        <div className="leftpart">
          <img src="src/assets/icons/lip.svg" alt="" />
        </div>
        <div className="rightpart">
          <p>{counterInfos.lipidCount}g</p>
          <p>Lipides</p>
        </div>
      </div>
    </article>
  );
};

export default Counter;
