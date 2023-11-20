import { Outlet } from 'react-router-dom';
import DashNav from '../components/DashNav';

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
