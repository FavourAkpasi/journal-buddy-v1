import { FaBook, FaLightbulb, FaMagic, FaPlus, FaUserAstronaut } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { SidebarButton, SidebarContainer, SidebarItem } from "./styles";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <SidebarContainer>
            <Logo />

            <SidebarItem style={{marginTop: "5rem"}}>
                <FaUserAstronaut />
                Profile
            </SidebarItem>

            <SidebarItem onClick={() => navigate("/entries")}>
                <FaBook />
                Entries
            </SidebarItem>

            <SidebarItem>
                <FaMagic />
                Reflection
            </SidebarItem>

            <SidebarItem>
                <FaLightbulb />
                Inspiration
            </SidebarItem>

            <SidebarButton onClick={()=> navigate("/")}>
                <FaPlus />
                New Entry
            </SidebarButton>

            <span className="text">JournalBuddy</span>

        </SidebarContainer>
    );
};

export default Sidebar;