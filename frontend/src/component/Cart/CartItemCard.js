import React from "react";
// import "./CartItemCard.css";

import { Link } from "react-router-dom";
import {AiFillDelete, AiFillHeart} from 'react-icons/ai'
import {BsFillTagFill} from 'react-icons/bs'
// import CartCheckout from "./CartCheckout";
const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    // <div className="CartItemCard">
    //   <img src={item.image} alt="ssa" />
    //   <div>
    //     <Link to={`/product/${item.product}`}>{item.name}</Link>
    //     <span>{`Price: ₹${item.price}`}</span>
    //     {/* <span>{`Size: ${item.size}`}</span> */}
    //     <p onClick={() => deleteCartItems(item.product)}>Remove</p>
    //   </div>
    // </div>

<div className="container">
<div className="row">
    <div style={{border:"1px solid rgba(241, 233, 233, 0.658)"}} className="col-12 py-4 px-2 rounded ">
        <div className="row">
            <div className="col-2 cartImgHolder d-flex aline-center flex-column justify-center gap-2">
                <img style={{width:'100%'}} src={item.image} alt="" />
            </div>
            <div className="col-6 cartImgHolder overflow-hidden">
                <h5 className="fw-bold text-muted">{item.name}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <div className="col-4"><li className="bg-success px-1 text-white">Recently Added</li></div>
                    <div className="col-4"><b>4.2</b> ⭐⭐⭐⭐</div>
                    <div className="col-4">( 4,752 Rating )</div>
                </div>
            </div>
            <div className="col-2 d-flex aline-end flex-column justify-center gap-2  ">
                <li><a href="" className=" text-dark d-flex aline-center gap-2" onClick={() => deleteCartItems(item.product)} > <AiFillDelete /> Delete</a></li>
                <li><a href="a" className=" text-danger d-flex aline-center gap-2"  > <AiFillHeart /> Add Favriout</a></li>
            </div>
            <div className="col-2 d-flex aline-end flex-column justify-center gap-2">
               <p className="fw-bold">{`Price: ₹${item.price}`}<span><BsFillTagFill/></span></p>
            </div>
        </div>
    </div>
    {/* <div className="col-3 p-1">
      <CartCheckout/>
    </div> */}
</div>
</div>
  );
};

export default CartItemCard;
