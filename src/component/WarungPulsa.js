import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CellWifiIcon from '@material-ui/icons/CellWifi';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MasterUser from './MasterUser';
import DataPelanggan from './DataPelanggan';
import DataLayanan from './DataLayanan';
import DataTransaksi from './DataTransaksi';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(BG.jpg)',
    backgroundRepeat: 'round',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    [theme.breakpoints.only('xl')]: {
      height:"275px"
    },
    [theme.breakpoints.only('lg')]: {
      height:"150px"
    }
  },
  tabPanel:{
    width:"100%"
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        
      >
        <Tab icon={<AccountCircleIcon />} label="Master User" style={{color:"#fdfdfd"}} {...a11yProps(0)} className={classes.tab}/>
        <Tab icon={<PhoneIcon />} label="Data Customer" style={{color:"#fdfdfd"}}{...a11yProps(1)} className={classes.tab} />
        <Tab icon={<CellWifiIcon />} label="Data Package" style={{color:"#fdfdfd"}}{...a11yProps(2)} className={classes.tab} />
        <Tab icon={<MonetizationOnIcon />} label="Data Transaction" style={{color:"#fdfdfd"}}{...a11yProps(3)} className={classes.tab}/>

      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <MasterUser/>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <DataPelanggan/>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        <DataLayanan/>
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanel}>
        <DataTransaksi/>
      </TabPanel>
    </div>
  );
}