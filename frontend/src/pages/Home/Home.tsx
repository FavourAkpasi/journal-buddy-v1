import { FaSave, FaSpinner } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidenav";
// import { SidebarButton } from "../../components/Sidebar/styles";
import { EntryInput, HomeContainer, StyledButton } from "./style";
import { FormEvent, useState } from "react";
import { BASE_URL } from "../../config/baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const navigate = useNavigate();
  const [entry, setEntry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/entry/new-entry`, {
        entry,
      });      
      toast.success(response.data); 
      setLoading(false);
      setEntry("");
      navigate("/entries");
         

    } catch (error: any) {
      toast.error(error.message || "An error occurred");
      setLoading(false);
    }
  };
  
  return (
    <>
      <Sidebar />
      <HomeContainer>
        <h1>New Entry</h1>
        <EntryInput placeholder="Hi Favour, what is on your mind?" value={entry}
          onChange={(e) => setEntry(e.target.value)}/>
        <StyledButton
          disabled={loading || entry===""}
          style={{ width: "80%" }}
          onClick={handleSave}
        >
          {loading ? <FaSpinner /> : <><FaSave /> Save Entry</> }
        </StyledButton>
      </HomeContainer>
    </>
  );
};

export default Home;
