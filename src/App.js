import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Inbox } from "./pages/Inbox";
import { Sent } from "./pages/Sent";
import { NotFound } from "./pages/NotFound";
import { DetailEmail } from "./pages/DetailEmail";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#240046" : "#7b2cbf",
  textDecoration: isActive ? "underline" : "",
});

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <NavLink to="/" className="navLink" style={getActiveStyle}>
          Home
        </NavLink>
        <NavLink to="/inbox" className="navLink" style={getActiveStyle}>
          Inbox
        </NavLink>
        <NavLink to="/sent" className="navLink" style={getActiveStyle}>
          Sent
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/sent/:emailId" element={<DetailEmail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/inbox/:emailId" element={<DetailEmail />} />
      </Routes>
    </div>
  );
}

export default App;
