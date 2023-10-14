import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {VpnKey} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Layout from './Layout';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { clearErrors, login,  } from "../../actions/userAction";
import { useNavigate, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import './styles.css'

function Copyright(props) {
  return (
    <Typography className='my-4' variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Kasperinfotech.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function LoginUSER() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const location = useLocation();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );



  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


 
  //here that single line mean if we are login then it move to shipping page that is 1 index otherwise it go to 0 index that means login page
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (error) {
      alert.info(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, alert, navigate, isAuthenticated, redirect]);

  
  const HandeSigninSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

 


  return (
    <div> {loading ? (
      <Loader />
    ) : (
          <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar className='bg-danger my-2'>
          <VpnKey />
          </Avatar>
          <Typography fontWeight={900} component="h1" variant="h5">
          Sign In
          </Typography>
          <form onSubmit={HandeSigninSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          
            <input type="submit" className=' my-3 btn btn-danger w-100' value='Sign In' />
            <Grid container>
              <Grid item xs>
                <Link to='/password/forgot' variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/register' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
   
   )}
   </div>

  );
}