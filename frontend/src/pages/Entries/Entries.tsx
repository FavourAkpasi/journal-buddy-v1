import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidenav";
import { HomeContainer } from "../Home/style";
import { BASE_URL } from "../../config/baseUrl";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { EntriesContainer, Entry } from "./style";

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/entry/entries`);
        setEntries(response.data);
      } catch (error: any) {
        toast.error(error.message || "An error occurred");
      }
      setIsLoading(false);
    };

    fetchEntries();
  }, []);

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

  const handleDelete = async (id: string) => {
    console.log(id);
    
    try {
      await axios.delete(`${BASE_URL}/entry/${id}`);
      setEntries(entries.filter((entry: any) => entry._id !== id));
      toast.success("Entry deleted successfully");
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    }
  }

  const handleSendToChat = async (entryText: string) => {    
    try {
      const response = await axios.post(`${BASE_URL}/chat`, {
        message: entryText,
       });
       console.log(entryText);
       
      console.log(response.data); 
      toast.success("Sent to OpenAI successfully");
    } catch (error: any) {        
      toast.error("Failed to send data to OpenAI: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <>
      <Sidebar />
      <HomeContainer>
        <h1> All Journal Entries</h1>
        {isLoading && <FaSpinner />}
        <EntriesContainer>
          {entries.map((entry: any) => (
            <Entry key={entry._id}>
              <div>{formatDate(entry.date)}</div>
              <p>{entry.entry}</p>
              <div>
                <span>Edit</span>
                <span onClick={()=>handleDelete(entry._id)}>Delete</span>
                <span onClick={()=>handleSendToChat(entry.entry)}>Chat</span>
              </div>
            </Entry>
          ))}
        </EntriesContainer>
      </HomeContainer>
    </>
  );
};

export default Entries;
