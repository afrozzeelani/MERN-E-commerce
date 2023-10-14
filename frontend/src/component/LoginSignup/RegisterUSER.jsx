import React, { useState,Fragment,useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Layout from "./Layout";
import { toast } from 'react-toastify';
import Loader from "../layout/Loader/Loader";
import Profile from "../../images/Profile3.png";
import { clearErrors, login, register } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import './styles.css'


function Copyright(props) {
  return (
    <Typography className="my-2" variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://example.com">Kasperinfotech.org</Link>{" "} {new Date().getFullYear()} {"."}
    </Typography>
  );
}

export default function RegisterUSER() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const location = useLocation();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const { name, lastname, phone, email, password } = user;
  const [avatar, setAvatar] = useState(Profile);
  const [avatarPreview, setAvatarPreview] = useState(Profile);
    //here that single line mean if we are login then it move to shipping page that is 1 index otherwise it go to 0 index that means login page
    const redirect = location.search ? location.search.split("=")[1] : "/login";

    useEffect(() => {
      if (error) {
        alert.info(error);
        dispatch(clearErrors());
      }
      if (isAuthenticated) {
        navigate(redirect);
      }
    }, [dispatch, error, alert, navigate, isAuthenticated, redirect]);

  const HandeSignupSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("lastname", lastname);
    myForm.set("phone", phone);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
    {loading ? (
      <Loader />
    ) : (
  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar className="bg-danger my-2">
            <LockOutlinedIcon />
          </Avatar>
          <Typography mb={4} fontWeight={900} component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={HandeSignupSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  value={name}
                  onChange={registerDataChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={lastname}
                  onChange={registerDataChange}
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  value={phone}
                  onChange={registerDataChange}
                  label="Contact phone"
                  name="phone"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  onChange={registerDataChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={3} id="registerImage" >
                <img src={avatarPreview} alt="Avatar Preview" />
              </Grid>
              <Grid item xs={12} sm={9} >
              <TextField
                  id=""
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerDataChange}
                />
              </Grid>
            </Grid>
            <input className="btn-danger btn my-3 w-100 " type="submit" value='Register' />
            <Grid container>
              <Grid item margin={"auto"}>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
 
    )}
    </div>
  );
}
