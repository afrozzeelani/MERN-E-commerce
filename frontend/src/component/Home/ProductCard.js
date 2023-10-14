import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import './ProdCard.css'

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    // <Link className="productCard" to={`/product/${product._id}`}>
    //   <img src={product.images[0].url} alt={product.name} />
    //   <p>{product.name}</p>
    //   <div>
    //     <Rating id="rating" {...options} />
    //   </div>
    //   <span>{`\u20B9${product.price}`}</span>
    // </Link>
    
           <div className="col-md-3 prodCard" style={{marginTop: "20px"}}>
     
            <div className="card">
                <div className="card-body">
                    <div style={{width:'100%', height:'200px'}} className="card-img-actions ">
                     <img style={{width:'100%'}} src={product.images[0].url} className="card-img img-fluid"  alt={product.name} /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <p className="font-weight-semibold mb-2">
                        {product.name.length > 20
                          ? product.name.slice(0, 25) + '...' // Trim to 20 characters and add ellipsis
                           : product.name}
                        </p>
                        {/* <h6>{prodCategory}</h6> */}
                        <div>
                        <Rating id="rating" {...options} />
                        </div>
                        <h3>₹{product.price}</h3>
                    </div>
                    <h3 className=" btn font-weight-semibold">Buy Now</h3>
                    <Link to={`/product/${product._id}`}><h6>More Details</h6></Link>
                  
                      
                      
                </div>
            </div>
        </div>
  );
};

export default ProductCard;
