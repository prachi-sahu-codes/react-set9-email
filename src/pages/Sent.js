import { useData } from "../api/DataContext";
import { Link } from "react-router-dom";

export const Sent = () => {
  const { sentEmailData } = useData();
  return (
    <>
      <h2 className="page-heading">My Sent Emails</h2>
      <ul>
        {sentEmailData.map(({ id, subject }) => (
          <li key={id} className="card btn-link">
            <Link className="card-link" to={`/mail/${id}`}>
              {subject}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
