import Time from "./time/Time";
import Intensity from "./intensity/Intensity";
import Score from "./score/Score";
import "./graphGroup.css";

const GraphGroup = ({ dataPerf, dataMoy, dataUser, isMock }) => {
  
  return (
    <div className="group-graph">
      <Time dataMoy={dataMoy} isMock={isMock} />
      <Intensity dataPerf={dataPerf} isMock={isMock} />
      <Score dataUser={dataUser} isMock={isMock} />
    </div>
  );
};


export default GraphGroup;
