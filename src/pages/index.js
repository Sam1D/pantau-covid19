import React, { Fragment, useState } from "react";

// IMPORT : Material Ui @Core
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  SwipeableDrawer,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// IMPORT : Material Ui @Icons
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuIcon from "@material-ui/icons/Menu";

// IMPORT : Material Ui @Styles
import { makeStyles, useTheme } from "@material-ui/core/styles";

// IMPORT : Material Ui @Color
import blue from '@material-ui/core/colors/blue';

// IMPORT : Routes
import Routes from "./routers";
import { Link } from "react-router-dom";

// Style Configurations
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: blue['700']
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Page() {
  // CONSTRUCTOR
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toogle Drawer on Mobile
  const handleDrawerToggle = (show) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMobileOpen(show);
  };

  // Drawer Settings
  const drawer = (
    <Fragment>
      <div className={classes.toolbar}>
        <div style={{ marginLeft: theme.spacing(2), marginTop: theme.spacing(0.5) }}>
          <Typography variant="h6">Pantau COVID-19</Typography>
          <Typography variant="caption" display="block">
            vINDEV_2005_07
          </Typography>
        </div>
      </div>

      <Divider />

      <List>
        <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
          <div onClick={() => setMobileOpen(false)}>
            <ListItem button key="home">
              <ListItemIcon>
                <DashboardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Beranda" />
            </ListItem>
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
          <div onClick={() => setMobileOpen(false)}>
            <ListItem button key="indonesia">
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Kasus Indonesia" />
            </ListItem>
          </div>
        </Link>

        <Link to="/dunia" style={{ textDecoration: 'none', color: '#000000' }}>
          <div onClick={() => setMobileOpen(false)}>
            <ListItem button key="world">
              <ListItemIcon>
                <PublicRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Kasus Dunia" />
            </ListItem>
          </div>
        </Link>

      </List>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Beranda
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onOpen={handleDrawerToggle(true)}
            onClose={handleDrawerToggle(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Routes />
      </main>
    </div>
  );
}

export default Page;
