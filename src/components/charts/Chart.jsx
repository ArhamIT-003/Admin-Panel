import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

const Chart = ({ title, grid, datakey, data }) => {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={datakey} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#555555" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
