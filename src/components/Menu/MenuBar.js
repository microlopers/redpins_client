import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction, showDashboardAction } from '../../redux/actions'
import DashboardIcon from '@material-ui/icons/Dashboard';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorE2, setAnchorE2] = useState(null);
  const openE2 = Boolean(anchorE2);

  const loginState = useSelector(state => state.login);
  const dispatch = useDispatch();

  function handleChange(event) {
    //setAuth(event.target.checked);
    dispatch(logoutAction());
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenu2(event) {
    setAnchorE2(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    setAnchorE2(null);
  }

  function handleDashboard(event) {
    dispatch(showDashboardAction());
  }

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />

      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar1"
            aria-haspopup="true"
            onClick={handleMenu2}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar1"
            anchorEl={anchorE2}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={openE2}
            onClose={handleClose}>
              
            <MenuItem onClick={handleClose}>001</MenuItem>
            <MenuItem onClick={handleClose}>002</MenuItem>
          </Menu>

          <IconButton
            aria-label="Dashboard"
            label="Dashboard"
            onClick={handleDashboard}
            color="inherit"
          >

            <DashboardIcon alt="Dashboard" title="Dashboard"></DashboardIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>

          </Typography>

          {auth && (
            <div>
              {props.name}

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img src={props.picture} alt='Avatar' style={{ width: 34, height: 34, borderRadius: 34 / 2 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
