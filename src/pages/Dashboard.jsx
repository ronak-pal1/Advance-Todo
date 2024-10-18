import Header from "../components/Header";
import MainDash from "../components/MainDash";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1 h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Dashboard window */}
        <MainDash />
      </div>
    </>
  );
};

export default Dashboard;
