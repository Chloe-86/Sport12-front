import { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import "./intensity.css";

const Intensity = ({ dataPerf, isMock }) => {
  const [formattedData, setFormattedData] = useState([]);

  // Extraire la map `kind` du data
  const kindMapping = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  useEffect(() => {
    if (dataPerf) {
      const data = isMock ? dataPerf?.data : dataPerf.data?.data;
      const formatted = data?.map((item) => ({
        ...item,
        kind: kindMapping[item.kind] || item.kind, // Utilisation d'un fallback si kind est inconnu
      }));
      setFormattedData(formatted || []);
    }
  }, [dataPerf, isMock]);

  return (
    <div className="intensity card">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="68%" data={formattedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <Radar dataKey="value" fill="#F00" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Intensity;
