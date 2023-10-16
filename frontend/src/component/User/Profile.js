import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {/* <div className="profileContainer">
            <div className="profileEdit">
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div className="profileDeatils">
              <div>
                <h4> Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>last Name</h4>
                <p>{user.lastname}</p>
              </div>
              <div>
                <h4> contact</h4>
                <p>{user.phone}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substring(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div> */}

<div>
           
            <div className="profileContainer">
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column"
                }}>
                    <h1 style={{
                        fontFamily: "Poppins,sans-serif",opacity:"1",
                        fontSize:"2vmax"
                    }}>My Profile</h1>
                    <img src={user.avatar.url} alt={user.name} className="profile__img" />
                    <Link to="/me/update" className="edit__profile">Edit Profile</Link>
                </div>
            </div>
            <div className="information">
                <div className="middle">
            <div className="info">
                <h4 style={{
                    padding:"0px 5px"
                }}>First Name:</h4>
                <p>{user.name}</p>
            </div>
            <div className="info">
                <h4 style={{
                    padding:"0px 5px"
                }}>Last Name:</h4>
                <p>{user.lastname}</p>
            </div>
            <div className="info">
                <h4 style={{
                    padding:"0px 5px"
                }}>Email:</h4>
                <p>{user.email}</p>
            </div>
            <div className="info">
                <h4 style={{
                    padding:"0px 5px"
                }}>contact:</h4>
                <p>{user.phone}</p>
            </div>
            <div className="info">
            <h4 style={{
                    padding:"0px 5px"
                }}>Joined On:</h4>
            <p>{String(user.createdAt).substr(0,10)}</p>
            </div> 
               
              <div className="change__info">
                  <Link to="/orders" className="settings">My Orders</Link>
                  <Link to="/password/update" className="settings">Change Password</Link>
              </div>
        </div>  
        </div>
        </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
