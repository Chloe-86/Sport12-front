import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Rectangle} from "recharts";
import "./time.css";
import { adaptSessions} from "../../../../utils/adapter";



const Time = ({ dataMoy, isMock }) => {
  
  // console.log(dataMoy.data.sessions.map(data=> console.log(data)))
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    if (dataMoy) {
      const adaptedData = adaptSessions(dataMoy, isMock);
      setSessions(adaptedData);
    }
  }, [dataMoy, isMock]);
  
  const formatDay = (day) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[day - 1] || "";
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-time">
          <p className="label">{`${payload[0].payload.sessionLength} min`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x } = points[0];
  
    return (
      <Rectangle
        opacity="0.0975"
        fill="#000"
        stroke="none"
        x={x}
        y={0} 
        width={width}
        height={height+50} 
      />
    );
  };

  return (
  
    <article className="time card">
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" >
        <LineChart data={sessions} margin={{bottom: 16 }}>
          <YAxis axisLine={false}  width={0} domain={[0, 100]} tickFormatter={(tick) => `${tick} min`} />
          <XAxis tickMargin={20} dataKey="day" axisLine={false} tickLine={false} padding={{ left: 15, right: 15}} tickFormatter={formatDay} stroke="#ffffff" opacity="0.504" />
          <Line type="natural" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} />
          <Tooltip  cursor={<CustomCursor />} content={CustomTooltip} />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
};

export default Time;
