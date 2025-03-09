import "./App.css";
import AButton from "./components/atoms/AButton";
import AGraph from "./components/atoms/AGraph";
import AIcon from "./components/atoms/AIcon";
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Revenue",
      data: [100, 200, 150, 250],
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: true },
  },
};

function App() {
  return (
    <div className="App">
      <AButton variant={"outlined"}>Add</AButton>
      <AIcon name={PermDeviceInformationIcon} size="medium" />
      <AGraph data={chartData} options={chartOptions} />
    </div>
  );
}

export default App;
