import { useState, useEffect } from "react";
import Activity from "./activity/Activity";
import { getData } from "../../serviceApi/dataService";

import Counter from "./Counter/Counter";
import GraphGroup from "./graphGroup/GraphGroup";
import { useAppContext } from "../../user/AppContext";

const Graph = () => {
  const { id } = useAppContext();
  
  const [dataUser, setDataUser] = useState(null);
  const [dataActivity, setDataActivity] = useState(null);
  const [dataAverageSessions, setDataAverageSessions] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);
  const [isMock, setIsMock] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const { dataUser, dataActivity, dataAverageSessions, dataPerformance, isMock } = await getData(id);

      setDataUser(dataUser);
      setDataActivity(dataActivity);
      setDataAverageSessions(dataAverageSessions);
      setDataPerformance(dataPerformance);
      setIsMock(isMock);
      setLoading(false); // Marque le chargement comme terminé
    };
    if (id) {
      loadData();
    }
  }, [id]);

  useEffect(() => {
    if (dataUser) {
      if (isMock) {
        setName(dataUser.userInfos.firstName);
      } else {
        setName(dataUser.data.userInfos.firstName);
      }
    }
  }, [dataUser, isMock]);
  
  return (
    <>
      {loading && <div>Chargement...</div>}

      {!loading && (
        <>
          {!dataUser || !dataActivity || !dataAverageSessions || !dataPerformance ? (
            <div>Erreur lors du chargement des données</div>
          ) : (
            <>
              <div className="head">
                <h2>
                  Bonjour <span className="user">{name}</span>
                </h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
              </div>
              <div className="main-content">
                <Activity dataActivity={dataActivity} isMock={isMock} />
                <Counter dataUser={dataUser} isMock={isMock} />
                <GraphGroup dataPerf={dataPerformance} dataMoy={dataAverageSessions} dataUser={dataUser} isMock={isMock} />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Graph;
