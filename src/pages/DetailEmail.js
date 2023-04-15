import { useParams } from "react-router";
import { useData } from "../api/DataContext";

export const DetailEmail = () => {
  const { emailId } = useParams();
  const { emailData, sentEmailData } = useData();

  const findEmail =
    Number(emailId) < 5
      ? emailData.find((email) => email.id === Number(emailId))
      : sentEmailData.find((email) => email.id === Number(emailId));

  return (
    <>
      <h1 className="page-heading">Email Details</h1>
      <div className="card">
        <h2>Subject: {findEmail.subject}</h2>
        <hr />
        <p>
          <span style={{ fontWeight: "500" }}>From: </span>
          {findEmail.sender}
        </p>
        <p>
          <span style={{ fontWeight: "500" }}>Message: </span>
          {findEmail.message}
        </p>
      </div>
    </>
  );
};
