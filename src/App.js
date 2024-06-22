import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { userData } = useContext(AuthContext);

  return (
    <div>
      ----------------------------------------------------------------------------<br></br>
      testa<br></br>
      ----------------------------------------------------------------------------<br></br>
    </div>
  );
}

export default App;
