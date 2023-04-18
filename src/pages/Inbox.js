import { useData } from "../api/DataContext";
import { Link } from "react-router-dom";

export const Inbox = () => {
  const { emailData, clickHandler, readEmail, unreadEmail } = useData();

  return (
    <>
      <h2 className="page-heading">My InBox</h2>
      <div className="count-heading sub-heading">
        <h3>Unread Emails: {unreadEmail}</h3>
        <h3>Read Emails: {readEmail}</h3>
      </div>
      <ul>
        {emailData.map(({ id, subject, read }) => (
          <li key={id} className="card btn-link">
            <Link className="card-link" to={`/mail/${id}`}>
              {subject}
            </Link>
            {!read && (
              <button onClick={() => clickHandler(id)}>Mark as Read</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
