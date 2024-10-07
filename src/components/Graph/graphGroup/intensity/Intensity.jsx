// import { useState, useEffect } from "react";
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
// import "./intensity.css";

//   // Extraire la map `kind` du data
//   const kindMapping = {
//     1: "Cardio",
//     2: "Energie",
//     3: "Endurance",
//     4: "Force",
//     5: "Vitesse",
//     6: "Intensité",
//   };

// const Intensity = ({ dataPerf, isMock }) => {
//   const [formattedData, setFormattedData] = useState([]);

//   useEffect(() => {
//     if (dataPerf) {
//       const data = isMock ? dataPerf?.data : dataPerf.data?.data;
//       const formatted = data?.map((item) => ({
//         ...item,
//         kind: kindMapping[item.kind] || item.kind, // Utilisation d'un fallback si kind est inconnu
//       }));
//       setFormattedData(formatted || []);
//     }
//   }, [dataPerf, isMock, kindMapping]);

//   return (
//     <div className="intensity card">
//       <ResponsiveContainer width="100%" height="100%">
//         <RadarChart cx="50%" cy="50%" outerRadius="68%" data={formattedData}>
//           <PolarGrid />
//           <PolarAngleAxis dataKey="kind" stroke="#ffffff" tick={{ fontSize: 12 }} />
//           <Radar dataKey="value" fill="#F00" fillOpacity={0.6} />
//         </RadarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Intensity;


import { useState, useEffect } from "react"; // Importation des hooks React
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"; // Importation des composants Recharts
import "./intensity.css"; // Importation du fichier CSS pour le style du composant

// Mapping des types d'intensité
const kindMapping = {
  1: "Cardio", // 1 correspond à Cardio
  2: "Energie", // 2 correspond à Energie
  3: "Endurance", // 3 correspond à Endurance
  4: "Force", // 4 correspond à Force
  5: "Vitesse", // 5 correspond à Vitesse
  6: "Intensité", // 6 correspond à Intensité
};

// Définition du composant Intensity
const Intensity = ({ dataPerf, isMock }) => {
  // État local pour stocker les données formatées
  const [formattedData, setFormattedData] = useState([]);

  // Hook useEffect pour mettre à jour les données formatées lorsque dataPerf ou isMock changent
  useEffect(() => {
    if (dataPerf) {
      // Extraction des données en fonction de isMock
      const data = isMock ? dataPerf?.data : dataPerf.data?.data;
      
      // Formatage des données en ajoutant le type d'intensité correspondant
      const formatted = data?.map((item) => ({
        ...item, // Copie des propriétés de l'item d'origine
        kind: kindMapping[item.kind] || item.kind, // Utilisation du mapping pour le type d'intensité
      }));

      // Mise à jour de l'état avec les données formatées ou tableau vide
      setFormattedData(formatted || []);
    }
  }, [dataPerf, isMock]);

  return (
    <div className="intensity card"> {/* Conteneur principal avec classe CSS */}
      <ResponsiveContainer width="100%" height="100%"> {/* Conteneur responsive pour le graphique */}
        <RadarChart cx="50%" cy="50%" outerRadius="68%" data={formattedData}> {/* Création du graphique radar */}
          <PolarGrid /> {/* Grille polaire pour le graphique */}
          <PolarAngleAxis dataKey="kind" stroke="#ffffff" tick={{ fontSize: 12 }} /> {/* Axe angulaire avec les types d'intensité */}
          <Radar dataKey="value" fill="#F00" fillOpacity={0.6} /> {/* Données du radar avec couleur et opacité */}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Exportation du composant
export default Intensity;
