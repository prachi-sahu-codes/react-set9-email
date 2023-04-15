import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Inbox } from "./pages/Inbox";
import { Sent } from "./pages/Sent";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/sent">Sent</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
