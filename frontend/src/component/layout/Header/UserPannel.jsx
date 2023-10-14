import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PasswordIcon from '@mui/icons-material/Password';

const UserPannel = () => {
  return (
    
      <div className="UserPannel">
        <div className="container">
          <div
            // style={{ borderBottom: "1px solid rgba(230, 216, 216, 0.74)" }}
            className="row mt-3 mb-3"
          >
            <h6>My Account</h6>
          </div>
          <div className="row">
            <div style={{border:'1px solid rgba(212, 203, 203, 0.188)', minHeight:'80vh', maxHeight:'80vh'}} className="col-3 rounded px-4 py-3 ">
              <p>
                👋 Welcome <span>Shashi </span>
              </p>
              <div className="row">
                <Link to='UserProfile' style={{boxShadow:'-3px 3px 5px rgba(212, 203, 203, 0.588), 2px -1px 5px rgba(212, 203, 203, 0.388)'}} className="col-12 d-flex justify-between p-2 mb-1 rounded">
                  <div className="d-flex aline-center gap-2 text-muted fs-6">
                    <AccountCircleIcon className="text-primary" /> Profile
                  </div>
                  <ArrowRightAltIcon className="fs-5 "/>
                </Link>
                <Link to='User-Order' style={{boxShadow:'-3px 3px 5px rgba(212, 203, 203, 0.588), 2px -1px 5px rgba(212, 203, 203, 0.388)'}} className="col-12 d-flex justify-between p-2 mb-1 rounded">
                  <div className="d-flex aline-center gap-2 text-muted fs-6">
                    <ShoppingCartIcon className="text-primary" /> Order
                  </div>
                  <ArrowRightAltIcon className="fs-5 "/>
                </Link>
                <Link to='UserWishlist' style={{boxShadow:'-3px 3px 5px rgba(212, 203, 203, 0.588), 2px -1px 5px rgba(212, 203, 203, 0.388)'}} className="col-12 d-flex justify-between p-2 mb-1 rounded">
                  <div className="d-flex aline-center gap-2 text-muted fs-6">
                    <FavoriteIcon className="text-danger" /> Favorite
                  </div>
                  <ArrowRightAltIcon className="fs-5 "/>
                </Link>
                <Link to='Change&User&password' style={{boxShadow:'-3px 3px 5px rgba(212, 203, 203, 0.588), 2px -1px 5px rgba(212, 203, 203, 0.388)'}} className="col-12 d-flex justify-between p-2 mb-1 rounded">
                  <div className="d-flex aline-center gap-2 text-muted fs-6">
                    <PasswordIcon className="text-primary" />Password
                  </div>
                  <ArrowRightAltIcon className="fs-5 "/>
                </Link>
                {/* <Link style={{boxShadow:'-3px 3px 5px rgba(212, 203, 203, 0.588), 2px -1px 5px rgba(212, 203, 203, 0.388)'}} className="col-12 d-flex justify-between p-2 mb-1 rounded">
                  <div className="d-flex aline-center gap-2 text-muted fs-6">
                    <IoHome className="text-primary" /> Address
                  </div>
                  <ArrowRightAltIcon className="fs-5 "/>
                </Link> */}
                <Link style={{boxShadow:'-3px 3px 5px rgba(212, 203, 203, 0.588), 2px -1px 5px rgba(212, 203, 203, 0.388)'}} className="col-12 d-flex justify-between p-2 mb-1 rounded">
                  <div className="d-flex aline-center gap-2 text-muted fs-6">
                    <FiLogOut /> Logout
                  </div>
                  <ArrowRightAltIcon className="fs-5 "/>
                </Link>
              </div>
            </div>
            <div className="col-9">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default UserPannel;
