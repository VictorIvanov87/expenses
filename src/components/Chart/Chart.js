import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ data }) => {
  const values = data.map((d) => d.value);
  const max = Math.max(...values);

  return (
    <div className="chart">
      {data.map((d) => (
        <ChartBar key={d.id} value={d.value} label={d.label} maxValue={max}></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
