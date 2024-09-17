import "./activity.css";
import { useState, useEffect } from "react";
import { adaptSessions} from "../../../utils/adapter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Activity = ({ dataActivity, isMock }) => {
  const [sessions, setSessions] = useState({});
  const [showWeightYAxis, setShowWeightYAxis] = useState(true);

  const formatDate = (date) => {
    const day = new Date(date).getDate();
    return day;
  };

  useEffect(() => {
    if (dataActivity) {
      const adaptedData = adaptSessions(dataActivity, isMock);
      setSessions(adaptedData);
    }
  }, [dataActivity, isMock]);
  

   // Fonction pour basculer entre les axes Y
   const toggleYAxis = (type) => {
    if (type === 'weight') {
      setShowWeightYAxis(true); // Affiche l'axe pour le poids
    } else {
      setShowWeightYAxis(false); // Affiche l'axe pour les calories
    }
  };


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-Activity">
          <p className="label">{`${payload[0].payload.kilogram} Kg`}</p>
          <p className="intro">{`${payload[0].payload.calories} Kcal`}</p>
        </div>
      );
    }

    return null;
  };


  return (
    <>
      {!dataActivity ? (
        <div>Erreur lors du chargement des données</div>
      ) : (
        <div className="activity">
          <div className="bar-activity">
            <div className="left-bar">
              <p>Activité quotidienne</p>
            </div>
            <div className="right-bar">
              <div className="weight" onClick={() => toggleYAxis('weight')} style={{ cursor: 'pointer' }}>
                <img src="src/assets/icons/vectorweight.svg" alt="ellipse" />
                <p>Poids (kg)</p>
              </div>
              <div className="cal" onClick={() => toggleYAxis('calories')} style={{ cursor: 'pointer' }}>
                <img src="src/assets/icons/vectorcal.svg" alt="ellipse" />
                <p>Calories brûlées (kCal)</p>
              </div>
            </div>
          </div>
          <div className="graph">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={sessions}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} horizontalPoints={[100, 200]} />
                <XAxis dataKey="day" tickFormatter={formatDate} />
                 {/* Affiche YAxis en fonction de l'état showWeightYAxis */}
                {showWeightYAxis ? (
                  <YAxis orientation="right" dataKey="kilogram" tickFormatter={(tick) => `${tick}kg`} domain={['dataMin-2', 'dataMax+2']} />
                ) : (
                  <YAxis orientation="right" dataKey="calories" />
                )}

                <Tooltip content={CustomTooltip} />
                <Bar dataKey="kilogram" fill="#000000" barSize={7} radius={3}/>
                <Bar dataKey="calories" fill="#E60000" barSize={7} radius={3}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Activity;
