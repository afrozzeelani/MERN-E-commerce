import React from 'react'
import cartImg from '../../Assets/Images/Home/Services/CARTPRODUCT.png'

const UserOrder = () => {
  return (
    <div>
        <h5 className='mb-4'>Order History</h5>
        <hr />
        <div className="row">
            <div className="col-1"></div>
            <div className="col-3"></div>
            <div className="col-2">Date</div>
            <div className="col-2">Price</div>
            <div className="col-2">Payment Type</div>
            <div className="col-1"></div>
            <div className="col-1"></div>
        </div>
        <hr />
        <div className="row">
            <div className="col-1 ">
              <div className="order-image w-100 ">
                <img style={{width:'100%'}} src={cartImg} alt="" />
              </div>
            </div>
            <div className="col-3">
                <h5 className='fw-bold'>Product Name</h5>
                <p>Lorem ipsum dolor sit amet </p>
            </div>
            <div className="col-2">
              <p>11-Oct-2023</p>
            </div>
            <div className="col-2">₹499</div>
            <div className="col-2">₹499 UPI</div>
            <div className="col-1"><a href="a" className='btn btn-outline-danger p-1'>Receipt</a></div>
            <div className="col-1"><a href="a" className='btn  btn-outline-primary p-1 '>Invoice</a></div>
        </div>

    </div>
  )
}

export default UserOrder