import React, { Fragment, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../../images/Profile3.png";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, updateProfile } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../../constants/userConstant";

const UserProfile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(Profile);
  const [avatarPreview, setAvatarPreview] = useState(Profile);

  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("lastname", lastname);
    myForm.set("phone", phone);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setLastname(user.lastname);
      setPhone(user.phone);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loadUser());
      navigate("/account");
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, navigate, user, isUpdated]);

  return (
    <>
      <h6 className="text-uppercase text-muted">My Profile</h6>
      <form className="py-1 px-5">
        <div
          style={{ width: "120px", position: "relative", margin: "auto" }}
          className="profile-img mb-5"
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background:
                "linear-gradient(165deg, rgba(0, 0, 255, 0.407), rgba(255, 0, 0, 0.645), rgba(255, 255, 0, 0.586))",
              padding: "3px",
              overflow: "hidden",
            }}
            className="Profile-Image m-auto d-flex flex-column"
          >
            <img
              style={{ width: "100%", height: "100px", borderRadius: "50%" }}
              src={user.avatar.url}
              alt=""
            />
          </div>
          <div className="cursor-pointer" style={{ position: "absolute", width: "100%" }}>
            <div
              style={{
                position: "absolute",
                width: "fit-content",
                borderRadius: "50%",
                top: "-35px",
                right: "12px",
              }}
            >
              <BorderColorIcon className="fs-3 bg-primary text-white rounded-circle p-1 " />
            </div>
            <input
              title=""
              style={{
                opacity: "1%",
                width: "30px",
                position: "absolute",
                top: "-35px",
                borderRadius: "50%",
                right: "12px",
              }}
              type="file"
              name=""
              id=""
            />
          </div>
        </div>
        <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastname}
                  onChange={(e) => setName(e.target.value)}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  disabled
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  name="Contact"
                  autoComplete="Contact"
                  value={phone}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  
                />
              </Grid>
            </Grid>
            <input
              className=" btn-danger btn my-3 w-100"
              type="submit"
              value="Save"
            />
      </form>
    </>
  );
};

export default UserProfile;
