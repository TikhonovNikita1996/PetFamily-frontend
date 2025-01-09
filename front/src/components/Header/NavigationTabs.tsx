import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { Link } from 'react-router';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavigationTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Главная страница"component={Link}
				to="/" icon={<HomeOutlinedIcon />} {...a11yProps(0)} />
          <Tab label="О волонтерстве" component={Link}
				to="/volunteers" icon={<FavoriteBorderOutlinedIcon />} {...a11yProps(1)} />
          <Tab label="Помощь животным" component={Link}
				to="/pets" icon={<VolunteerActivismOutlinedIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}