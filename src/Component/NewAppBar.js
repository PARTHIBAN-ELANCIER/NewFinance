import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
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

export default function NewAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [windowWidth , setWindowSize] = useState()

  useEffect(() => {
   
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 console.log({windowWidth})

  return (
    <div className={classes.root} >
      <AppBar position="fixed" style={{backgroundColor:'white' , color:'black'}}>
        <Toolbar style={{display:'flex'}}>
        <Box>
          <img src="payir.png" style={{width:'100px'}} />
        </Box>
        <div style={{color:'black', marginLeft:'5%', width:'40%',display:'flex', fontSize:'36px',color:'black'}}>
                Astra Quark Life Insurance
        </div>
          
            <div style={{width:'60%',display:'flex',justifyContent:'space-around' , cursor:'pointer', fontSize:'21px',color:'black'}}>
                <div>
                          
              <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px'}}> Home</b>
              </Box>
                </div>
                <div>
                
              <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/AboutUs')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px'}}> AboutUs</b>
              </Box>
                </div>
                <div>
                <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/OurProduct')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px'}}> OurProduct</b>
              </Box>
                </div>
                <div>
                <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px'}}> File a claim</b>
              </Box>
                </div>
                <div>
                <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px'}}> Contact Us</b>
              </Box>
                </div>
                <div> <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px' }}> My Profile</b>
              </Box>
                </div>
                <div> <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px' }}>SignIn</b>
              </Box>
                </div>
            </div>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
