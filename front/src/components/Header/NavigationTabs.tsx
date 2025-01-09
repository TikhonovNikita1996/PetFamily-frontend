import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router";

export default function NavigationTabs() {
	return (
		<div>
			<Tabs value={0} indicatorColor="primary" textColor="inherit" centered>
				<Tab
					icon={<HomeOutlinedIcon />}
					iconPosition="start"
					label="Главная страница"
					component={Link}
					to="/"
				/>
				<Tab
					icon={<FavoriteBorderOutlinedIcon />}
					iconPosition="start"
					label="О волонтерстве"
					component={Link}
					to="/volunteers"
				/>
				<Tab
					icon={<VolunteerActivismOutlinedIcon />}
					iconPosition="start"
					label="Помощь животным"
					component={Link}
					to="/pets"
				/>
			</Tabs>
		</div>
	);
}
