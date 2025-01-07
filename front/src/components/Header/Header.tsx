import { AppBar, IconButton } from "@mui/material";
import { Link, NavLink } from "react-router";
import LoginIcon from "@mui/icons-material/login";
import ProfileIcon from "@mui/icons-material/person";
import NavigationTabs from "./NavigationTabs";

export default function Header() {
    return (
        <AppBar position="static">
          <div className="flex flex-row items-center justify-between py-2 px-3  bg-blue-500">
              <NavLink className="text-2xl" to="/">Pet Family</NavLink>
              <div>
                <IconButton color="inherit" component={Link} to="/profile">
                  <LoginIcon />
                </IconButton>
                <IconButton color="inherit" component={Link} to="/login">
                  <ProfileIcon />
                </IconButton>
              </div>
          </div>
          <div className="flex flex-row items-center px-3 bg-white text-black">
            <NavigationTabs />
          </div>
        </AppBar>
    );
}
