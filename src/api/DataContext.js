import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [emailData, setEmailData] = useState([]);
  const [sentEmailData, setSentEmailData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/allemails");

      if (response.status === 200) {
        setEmailData(response.data.emails);
        setSentEmailData(response.data.sentEmails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { readEmail, unreadEmail } = emailData.reduce(
    (acc, { read }) =>
      read
        ? { ...acc, readEmail: acc.readEmail + 1 }
        : { ...acc, unreadEmail: acc.unreadEmail + 1 },
    { readEmail: 0, unreadEmail: 0 }
  );

  const clickHandler = (id) => {
    setEmailData((emailData) =>
      emailData.map((email) =>
        email.id === id ? { ...email, read: !email.read } : { ...email }
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        emailData,
        setEmailData,
        sentEmailData,
        clickHandler,
        readEmail,
        unreadEmail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
