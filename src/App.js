import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import SignPage from "./pages/SignPage/SignPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const { userData } = useContext(AuthContext);

  if (!userData) return <SignPage />

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
