import { Route } from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {Avatar, Grid, Paper, Popper, MenuItem, MenuList, ClickAwayListener} from '@material-ui/core';
import Person from "@material-ui/icons/Person";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const items = [
    {
        href: '/products',
        icon: FormatListBulletedOutlinedIcon,
        title: 'Manage'
    },
    {
        href: '#',
        icon: ShoppingCartOutlinedIcon,
        title: 'Checkout'
    },
    {
        href: '#',
        icon: AssignmentOutlinedIcon,
        title: 'Orders'
    },
    {
        href: '/products',
        icon: ShoppingCartOutlinedIcon,
        title: 'Products'
    },
    {
        href: '#',
        icon: SettingsOutlinedIcon,
        title: 'Settings'
    },
    {
        href: '#',
        icon: NotificationsNoneIcon,
        title: 'Notifications'
    },

];


const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [openProfile, setOpenProfile] = React.useState(null);
  
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Route
            {...rest}
            render={(props) => (


                <div className={classes.root}>
                    <CssBaseline />
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbar}>
                            <div>
                                <Avatar
                                style={{marginRight:'30px'}}
                                    src={'https://company.bawsala.net/static/logo.3f84a347.svg'}
                                    sx={{
                                        cursor: 'pointer',
                                        width: 64,
                                        height: 64
                                    }}
                                    to="/"
                                />
                            </div>
                            <div>
                                <h6 style={{marginRight:'50px'}}>KONA</h6>
                            </div>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            {items.map(item => (
                                <div>
                                    <Link href={item.href} style={{ textDecoration: 'none' }} >
                                        <ListItem >
                                            <Button
                                                style={{ textAlign: 'left' }}
                                                fullWidth
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontWeight: 'small',
                                                    textAlign: 'left',
                                                    letterSpacing: 0,
                                                    textTransform: 'none',
                                                }}
                                            >
                                                <ListItemIcon>
                                                    <item.icon />
                                                </ListItemIcon>
                                                <ListItemText primary={item.title} />
                                            </Button>
                                        </ListItem>
                                    </Link>
                                </div>
                            ))}
                        </List>
                    </Drawer>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                        color={'#ffffff'}
                    >
                        <Paper>
                        <Toolbar >
                        <Grid container >
                            <Grid item >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            </Grid>
                            <Grid item xs={3} >
                            <Typography variant="h6" noWrap style={{marginTop:'8px'}}>
                                Product List
                            </Typography>
                            </Grid>
                                <Grid xs={6} ></Grid>
                                <Grid item xs={2}>
                                    <Button style={{float:'right',marginTop:'5px'}}
                                    color={window.innerWidth > 959 ? "transparent" : "white"}
                                    justIcon={window.innerWidth > 959}
                                    simple={!(window.innerWidth > 959)}
                                    aria-owns={openProfile ? "profile-menu-list-grow" : null}
                                    aria-haspopup="true"
                                    onClick={handleClickProfile}
                                    >
                                    <Person  style={{float:'right'}}/>
                                    <Typography>Admin</Typography>
                                    </Button>
                                    <Popper
                                    style={{backgroundColor:'whitesmoke'}}
                                    open={Boolean(openProfile)}
                                    anchorEl={openProfile}
                                    transition
                                    disablePortal
                                    // className={
                                    //   classNames({ [classes.popperClose]: !openProfile }) +
                                    //   " " +
                                    //   classes.popperNav
                                    // }
                                    >
                                    <ClickAwayListener onClickAway={handleCloseProfile}>
                                    <MenuList role="menu">
                                    <MenuItem>
                                    Profile
                                    </MenuItem>
                                    <MenuItem>
                                    Logout
                                    </MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                    </Popper>
                            </Grid>
                            </Grid>
                        </Toolbar>
                        </Paper>
                    </AppBar>

                    <main className={classes.content}> <Component {...props} /></main>
                </div>
            )}
        />
    );
};

// const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={(props) => (
//                 <DashboardLayout>
//                     <Component {...props} />
//                 </DashboardLayout>
//             )}
//         />
//     );
// };

export default DashboardLayoutRoute;