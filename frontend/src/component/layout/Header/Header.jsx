import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./head.css";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const getprofiler = () => {
    document
      .getElementById("loginProfileDrop")
      .classList.toggle("profilerVisible");
  };
  const HideAgain = () => {
    document
      .getElementById("loginProfileDrop")
      .classList.remove("profilerVisible");
  };
  const { cartItems } = useSelector((state) => state.cart);
  const user = {
    avatar: {
      url: "/path/to/user/avatar.jpg",
    },
    // Add other user properties as needed
    // For example: name, email, etc.
  };
  return (
    <>
      <header
        style={{
          boxShadow: "0 1px 3px rgba(255, 181, 181, 0.527)",
          marginBottom: ".1rem"
        }}
      >
        <div className="container d-flex justify-between aline-center py-3 px-4">
          <div className="brand-logo height-fit">
            <Link to="/" className="fs-3 fw-bold text-danger">
              KASPER
            </Link>
          </div>
          <div className="Nav-links d-sm-none d-md-flex gap-4">
            <li>
              <Link to="/" className="text-danger">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-danger">
                About
              </Link>
            </li>
            <li>
              <Link className="text-danger" to="/Products">
                Products
              </Link>
            </li>
            <li>
              <Link to="/Demo" className="text-danger">
                Demo
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-danger">
                Contact
              </Link>
            </li>
          </div>
          <div className="user-Links d-flex gap-4">
            <li>
              <Link to="/login" className="text-danger text-center">
                <p className="d-none d-sm-inline">Login</p>{" "}
                <AccountCircleIcon className="fs-5 fw-bold" />
              </Link>
            </li>
            <li>
              <Link className="text-danger text-center">
                <p className="d-none d-sm-inline">Search</p>{" "}
                <SearchIcon className="fs-5 fw-bold" />
              </Link>
            </li>
            <li>
              <Link className="text-danger text-center">
                <p className="d-none d-sm-inline">Favriout</p>{" "}
                <AiOutlineHeart className="fs-5 fw-bold" />
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-danger text-center">
                <Badge badgeContent={cartItems.length} color="error">
                  <AiOutlineShoppingCart
                    style={{
                      fontSize: "25px",
                      color: cartItems.length > 0 ? "red" : "unset"
                    }}
                  />
                </Badge>
                <p className="d-none d-sm-inline">Cart</p>
              </Link>
            </li>

            <li>
              <div>
                <div className="loginImage position-relative">
                  <img
                    onClick={getprofiler}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "green",
                      cursor: "pointer"
                    }}
                    src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                    alt="Profile"
                  />

                  <div
                    id="loginProfileDrop"
                    className="loginProfileDrop position-absolute p-2 text-black "
                    style={{ right: "0", width: "150px", background: "white" }}
                  >
                    <h6 className="text-center">
                      👋 Welcome <br /> Afroz Zeelani
                    </h6>
                    <Link
                      onClick={HideAgain}
                      className="d-flex  gap-2 aline-center"
                    >
                      <ManageAccountsIcon />
                      My Account
                    </Link>
                    <Link
                      onClick={HideAgain}
                      className="d-flex  gap-2 aline-center"
                    >
                      <LogoutIcon />
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
