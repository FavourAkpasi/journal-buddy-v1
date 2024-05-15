import { FaSave, FaSpinner } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidenav";
import { EntryInput, HomeContainer, StyledButton } from "./style";
import { FormEvent, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import useEntry from "../../Store/useEntry";
import { AddEntryType } from "../../type/entry";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Store/useAuth";


const Home = () => {
  const {addingEntry, addEntry, entryAdded, resetEntryState} = useEntry((state) => state);
  const { user } = useAuth((state) => state);
  const navigate = useNavigate();
  const [entry, setEntry] = useState("");

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    const payload: AddEntryType = {
      text: entry,
    };
    addEntry(payload);
  };

  useEffect(() => {
    if (entryAdded) {
      setEntry("");
      resetEntryState();
      navigate("/entries");
    }
  }, [entryAdded, navigate, resetEntryState]);
  
  return (
    <>
      <Sidebar />
      <HomeContainer>
        <h1>New Entry</h1>
        <EntryInput placeholder={`Hi ${user?.name}, what is on your mind?`} value={entry}
          onChange={(e) => setEntry(e.target.value)}/>
        <StyledButton
          disabled={addingEntry || entry===""}
          style={{ width: "80%" }}
          onClick={handleSave}
        >
          {addingEntry ? <FaSpinner /> : <><FaSave /> Save Entry</> }
        </StyledButton>
      </HomeContainer>
    </>
  );
};

export default Home;
