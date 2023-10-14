import React from "react";
import {BsFillTagFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import cartImg from '../../Assets/Images/Home/Services/CARTPRODUCT.png'

const UserWishlist = () => {
  return (
    <div>
      <div className="row">
        <div
          style={{ border: "1px solid rgba(241, 233, 233, 0.658)" }}
          className="col-11 py-4 px-2 rounded "
        >
          <div className="row">
            <div className="col-2 cartImgHolder d-flex aline-center flex-column justify-center gap-2">
              <img style={{ width: "100%" }} src={cartImg} alt="" />
            </div>
            <div className="col-8 cartImgHolder overflow-hidden">
              <h5 className="fw-bold text-muted">Product Name</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="row">
                <div className="col-4">
                  <li className="bg-success px-1 text-white">Recently Added</li>
                </div>
                <div className="col-4">
                  <b>4.2</b> ⭐⭐⭐⭐
                </div>
                <div className="col-4">( 4,752 Rating )</div>
              </div>
            </div>
            <div className="col-2 d-flex aline-end flex-column justify-center gap-2">
              <p className="fw-bold">
                ₹499{" "}
                <span>
                  <BsFillTagFill />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 bg-danger rounded d-flex flex-column justify-center aline-center">
          <AiFillDelete className="fs-2 text-white"/> 
        </div>
      </div>
    </div>
  );
};

export default UserWishlist;
