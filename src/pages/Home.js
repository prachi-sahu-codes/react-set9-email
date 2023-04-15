import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2 className="page-heading">My Mail Box</h2>
      <div className="card count-heading">
        <NavLink to="/inbox" className="navLink">
          Inbox
        </NavLink>
        <NavLink to="/sent" className="navLink">
          Sent
        </NavLink>
      </div>
    </div>
  );
};
