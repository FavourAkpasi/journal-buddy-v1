import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidenav";
import { HomeContainer } from "../Home/style";
import { FaSpinner } from "react-icons/fa";
import { EntriesContainer, Entry } from "./style";
import useEntry from "../../Store/useEntry";
import {useNavigate} from "react-router-dom";

const Entries = () => {
  const { entries, fetchingEntries, entriesFetched, resetEntryState } =
    useEntry((state) => state);
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[date.getDay()];
    const dateNum = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-US", { timeStyle: "short" }); // You can adjust locale as needed

    return `${day}, ${dateNum} ${monthName} ${year} at ${time}`;
  };

  const handleSendToChat = async () => {
    navigate("/chat");
  };

  useEffect(() => {
    if (entriesFetched) {
      resetEntryState();
    }
  }, [entriesFetched, resetEntryState]);

  return (
    <>
      <Sidebar />
      <HomeContainer>
        <h1> All Journal Entries</h1>
        {entries.length === 0 && !fetchingEntries && <p>you have no entries yet</p>}
        {fetchingEntries && <FaSpinner />}
        <EntriesContainer>
          {entries.map((entry: any) => (
            <Entry key={entry._id}>
              <div>{formatDate(entry.createdAt)}</div>
              <p>{entry.text}</p>
              <div>
                <span>Edit</span>
                <span>Delete</span>
                <span onClick={() => handleSendToChat()}>Chat</span>
              </div>
            </Entry>
          ))}
        </EntriesContainer>
      </HomeContainer>
    </>
  );
};

export default Entries;
