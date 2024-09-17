
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./score.css";
import { adaptScore } from "../../../../utils/adapter";
import { useAppContext } from "../../../../user/AppContext";

const Score = ({ dataUser, isMock }) => {

  const { id } = useAppContext();
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (dataUser) {
      const adaptedScore = adaptScore(dataUser, isMock, id);
      setScore(adaptedScore);
    }
  }, [dataUser, isMock, id]);

  const percentageScore = score * 100; 

  const dataCircle = [
    { name: "completed", value: percentageScore }, 
    { name: "remaining", value: 100 - percentageScore }, 
  ];

  const COLORS = ["#f00", "#FFFFFF"]; 

  const renderInnerCircle = (props) => {
    const { cx, cy, innerRadius} = props;
    return (
      <g>
        <circle cx={cx} cy={cy} r={innerRadius} fill="#FFFFFF" stroke="none" />
      </g>
    );
  };

  return (
    <div className="score card">
      <p className="label">de votre objectif</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            cornerRadius={50}
            data={dataCircle}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            startAngle={90} 
            endAngle={-270} 
          >
            {dataCircle.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie
            data={[{ name: "inner", value: 1 }]}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={65}
            fill="#FFFFFF"
            label={false}
            activeShape={renderInnerCircle}
            stroke={false}
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {`${percentageScore} %`}
      </div>
    </div>
  );
};

export default Score;
