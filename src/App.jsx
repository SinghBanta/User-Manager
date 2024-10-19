import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the Home component */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App
