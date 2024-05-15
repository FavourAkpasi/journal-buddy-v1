import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidenav";
import { HomeContainer } from "../Home/style";
import { FaSpinner } from "react-icons/fa";
import { EntriesContainer, Entry } from "./style";
import useEntry from "../../Store/useEntry";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-navigation/routes";
import { formatDateHelper } from "../../utils/functions";

const Entries = () => {
  const {
    entries,
    fetchingEntries,
    entriesFetched,
    resetEntryState,
    deleteEntry,
  } = useEntry((state) => state);
  const navigate = useNavigate();

  const handleDelete = (entryId: string) => {
    deleteEntry(entryId);
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
        {entries.length === 0 && !fetchingEntries && (
          <p>you have no Journal entries yet</p>
        )}
        {fetchingEntries && <FaSpinner />}
        <EntriesContainer>
          {entries.map((entry: any) => (
            <Entry key={entry._id}>
              <div>{formatDateHelper(entry.createdAt)}</div>
              <p>{entry.text}</p>
              <div>
                <span>Edit</span>
                <span onClick={() => handleDelete(entry._id)}>Delete</span>
                <span onClick={() => navigate(`/${ROUTES.chat}/${entry._id}`)}>
                  Chat
                </span>
              </div>
            </Entry>
          ))}
        </EntriesContainer>
      </HomeContainer>
    </>
  );
};

export default Entries;
