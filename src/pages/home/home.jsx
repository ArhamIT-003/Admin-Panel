import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import Chart from "../../components/charts/Chart";
import Widgetlg from "../../components/widgetlg/Widgetlg";
import Widgetsm from "../../components/widgetsm/Widgetsm";
import "./home.css";
import { data } from "../../chartsData/Data";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" grid datakey="Active-User" />
      <div className="widgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
};

export default Home;
