import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function SlideBar() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const items = [
    { name: "student 1", status: "pending", date: "12th Sept" },
    { name: "student 2", status: "pending", date: "12th Sept" },
    { name: "student 3", status: "Completed", date: "12th Sept" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        position: "relative",
        minHeight: 200,
      }}
      className="w-full"
    >
      <AppBar position="static" color="default" className="w-full">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Closed" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        className="w-full"
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div className="text-xl flex justify-between gap-2 bg-[#BAF19C] rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-3xl">{item.name}</p>
                <p className="flex justify-center items-center bg-yellow-300 font-bold rounded-full p-2">
                  {item.status}
                </p>
                <p className="flex justify-center items-center">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div className="text-xl flex justify-between gap-2 bg-[#f19c9c] rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-3xl">{item.name}</p>
                <p className="flex justify-center items-center bg-green-300 font-bold rounded-full p-2">
                  {item.status}
                </p>
                <p className="flex justify-center items-center">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
