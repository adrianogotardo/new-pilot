import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Orders from "./pages/Orders/Orders";
import Employees from "./pages/Employees/Employees";
import WorkingSites from "./pages/WorkingSites/WorkingSites";
import Stores from "./pages/Stores/Stores";
import Meals from "./pages/Meals/Meals";
import Incomes from "./pages/Incomes/Incomes";

function App() {
  const { userData } = useContext(AuthContext);

  if (!userData) return <AuthPage />
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/working-sites" element={<WorkingSites />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/incomes" element={<Incomes />} />
      </Routes>
    </>
  );
}

export default App;
