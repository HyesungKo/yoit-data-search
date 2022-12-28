import { Box } from "@mui/material";
import SideBar from "./side-bar";
import Dashboard from "./dashboard";


function Main() {
    return (
        <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
            <SideBar />
            <Dashboard />
        </Box>
        
    )
}

export default Main;