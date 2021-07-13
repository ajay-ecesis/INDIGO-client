import  {useState, useContext,useEffect} from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './AdminListItems';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ExitToApp} from '@material-ui/icons'
import Link from '@material-ui/core/Link';
import axios from 'axios';
import {Context} from '../../../context'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Indigo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
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
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const AdminLayout = ({children}) => {
  const [anchorEl, setAnchorEl] = useState(null);
    // state
    const {state, dispatch} = useContext(Context);
    const { user } = state;
    const [notifications,setnotifications] = useState([]);
    const [notificationloading,setnotificationloading] = useState(false);
    // router
    const router = useRouter();

    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(async()=>{
      try{
        const {data} = await axios.get(`/api/admin/notifications`);
        // console.log("notifications",data)
        setnotifications(data);

      }catch(error){
        console.log(error)
      }
      
    },[])

    const displayNotification = (data)=>{
      switch (data.type) {
        case 0:
          return `${data?.actionby?.firstName} created a new account`;
        case 1:
          return `${data?.user?.firstName} approved by ${data?.actionby?.firstName}`;
        case 2:
          return `${data?.user?.firstName} rejected by ${data?.actionby?.firstName} `
      }
    }
       
    
    // pending functionality
    
    const handleNotification = async(notification)=>{
      setnotificationloading(true);
      const {data} = await axios.put(`/api/admin/messages/markasread`,{
        id:notification._id
      })
      // console.log("Notification data",data)
      if(data.type===0){
        // Registration notification
                if(data.actionby.role === 0){
                  const doc = await axios.put(`/api/admin/getbrandfromuserid`,{
                    id:data.actionby._id
                })
              // console.log("brand from user",doc.data)
                if(doc.data){
                  router.push(`/admin/brands/${doc.data._id}`)
                }
            
            }
              if(data.actionby.role === 1){
                  const doc = await axios.put(`/api/admin/getmanufacturerfromuserid`,{
                    id:data.actionby._id
                  })
                  if(doc.data){
                    router.push(`/admin/manufacturer/${doc.data._id}`)
                  }
              
              }
     
      }
      if(data.type === 1){
        // Approved by admin notification
        if(data.user.role === 0){
          const doc = await axios.put(`/api/admin/getbrandfromuserid`,{
            id:data.user._id
        })
      // console.log("brand from user",doc.data)
        if(doc.data){
          router.push(`/admin/brands/${doc.data._id}`)
        }
    
    }
      if(data.user.role === 1){
          const doc = await axios.put(`/api/admin/getmanufacturerfromuserid`,{
            id:data.user._id
          })
          if(doc.data){
            router.push(`/admin/manufacturer/${doc.data._id}`)
          }
      
      }
      }
      if(data.type===2){
        //admin reject notification
        if(data.user.role === 0){
          const doc = await axios.put(`/api/admin/getbrandfromuserid`,{
            id:data.user._id
        })
      // console.log("brand from user",doc.data)
        if(doc.data){
          router.push(`/admin/brands/${doc.data._id}`)
        }
    
    }
      if(data.user.role === 1){
          const doc = await axios.put(`/api/admin/getmanufacturerfromuserid`,{
            id:data.user._id
          })
          if(doc.data){
            router.push(`/admin/manufacturer/${doc.data._id}`)
          }
      
      }
      }
      setnotificationloading(false)
    }
    //pending functionality

    // logout function
    const logout = async() => {
        dispatch({type: "LOGOUT"});
        const {data} = await axios.get('/api/logout');
        toast(data.message);
        //router.push('/');
        return window.location.replace("/");
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Indigo
                </Typography>

                <IconButton aria-label="show 17 new notifications" color="inherit" onClick={handleClick}>
                  <Badge badgeContent={notifications?.length} color="secondary">
                    <NotificationsIcon />
                    
                  </Badge>
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              
                >
                  {notifications.length > 0 ? notifications?.map((data,i)=>(
                    
                   !data.isread && <MenuItem disabled={notificationloading} key={i} onClick={()=>handleNotification(data)}>{displayNotification(data)} <hr /></MenuItem>
                    
                  )) : <MenuItem >No new notifications</MenuItem>}
                </Menu>
                <IconButton color="inherit" button onClick={() => logout()}>
                    {/* <Badge badgeContent={4} color="secondary"> */}
                    <ExitToApp />
                    {/* </Badge> */}
                </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                {/* <List>{secondaryListItems}</List> */}
                <List>

                  <ListItem button onClick={() => logout()}>
                    <ListItemIcon>
                      <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>

                </List>
            </Drawer>
            
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {children}
                <Box pt={4}>
                    <Copyright />
                </Box>
                </Container>
            </main>
        </div>
    )
}

export default AdminLayout
