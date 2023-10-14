import { useParams } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview
} from "../../actions/productAction";
import { Rating } from "@material-ui/lab";
import ReviewCard from "./ReviewCard";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartAction";
import { createwishlist } from "../../actions/wishlistAction";
import { loadUser } from "../../actions/userAction";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from "@material-ui/core";
import { NEW_REVIEW_RESET } from "../../constants/productConstant";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const sizes = ["S", "M", "L"];
  const [size, setSize] = useState("S");
  const { error: werror } = useSelector((state) => state.wishlist);
  const param = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewError, success, size]);

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity, size));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);
    dispatch(newReview(myForm));
    setOpen(false);
  };

  const {
    loading: userloading,
    user,
    isAuthenticated
  } = useSelector((state) => state.user);

  const addtowishlist = () => {
    if (user) {
      const option = {
        user: user._id,
        orderItems: [{ product: param.id }]
      };
      console.log(option);
      dispatch(createwishlist(option));

      alert.success("Product added successfully in wishlist");
    } else {
      alert.show("Login to add Product into Wishlist");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        // <Fragment>
        //   <div className="ProductDetails">
        //     <div>
        //       <Carousel>
        //         {product.images &&
        //           product.images.map((item, i) => (
        //             <img
        //               className="CarouselImage"
        //               key={i}
        //               src={item.url}
        //               alt={`${i} Slide`}
        //             />
        //           ))}
        //       </Carousel>
        //     </div>

        //     <div>
        //       <div className="detailsBlock-1">
        //         <h2>{product.name}</h2>
        //         <p>Product # {product._id}</p>
        //       </div>
        //       <div className="detailsBlock-2">
        //         <Rating id="rating" {...options} />
        //         <span className="detailsBlock-2-span">
        //           ({product.numOfReviews} Reviews)
        //         </span>
        //       </div>

        //       <div className="detailsBlock-3">
        //         <h1>{`₹${product.price}`}</h1>
        //         <div className="detailsBlock-3-1">

        //           <div className="detailsBlock-3-1-1">
        //             <button onClick={decreaseQuantity}>-</button>
        //             <input readOnly type="number" value={quantity} />
        //             <button onClick={increaseQuantity}>+</button>
        //           </div>

        //           {/* <div className="sizeBlock">
        //             <select required onChange={(e) => setSize(e.target.value)}>
        //               <option disabled="disabled">Size</option>
        //               {sizes?.map((size) => (
        //                 <option key={size} value={size}>
        //                   {size}
        //                 </option>
        //               ))}
        //             </select>
        //           </div> */}
        //         </div>

        //         <button
        //           className="addCartButton"
        //           disabled={product.stock < 1 ? true : false}
        //           onClick={addToCartHandler}
        //         >
        //           Add to Cart
        //         </button>

        //         <button className="wishlistButton" onClick={addtowishlist}>
        //           WISHLIST
        //         </button>
        //       </div>

        //       <p className="stockStatus">
        //         Status:
        //         <b className={product.stock < 1 ? "redColor" : "greenColor"}>
        //           {product.stock < 1 ? "OutOfStock" : "InStock"}
        //         </b>
        //       </p>

        //       <div className="detailsBlock-4">
        //         Description : <p>{product.description}</p>
        //       </div>

        //       <button onClick={submitReviewToggle} className="submitReview">
        //         Submit Review
        //       </button>
        //     </div>
        //   </div>

        //   <h3 className="reviewsHeading">REVIEWS</h3>

        //   <Dialog
        //     aria-labelledby="simple-dialog-title"
        //     open={open}
        //     onClose={submitReviewToggle}
        //   >
        //     <DialogTitle>Submit Review</DialogTitle>
        //     <DialogContent className="submitDialog">
        //       <Rating
        //         onChange={(e) => setRating(e.target.value)}
        //         value={rating}
        //         size="large"
        //       />

        //       <textarea
        //         className="submitDialogTextArea"
        //         cols="30"
        //         rows="5"
        //         value={comment}
        //         onChange={(e) => setComment(e.target.value)}
        //       ></textarea>
        //     </DialogContent>
        //     <DialogActions>
        //       <Button onClick={submitReviewToggle} color="secondary">
        //         Cancel
        //       </Button>
        //       <Button onClick={reviewSubmitHandler} color="primary">
        //         Submit
        //       </Button>
        //     </DialogActions>
        //   </Dialog>

        //   {product.reviews && product.reviews[0] ? (
        //     <div className="reviews">
        //       {product.reviews &&
        //         product.reviews.map((review) => (
        //           <ReviewCard key={review._id} review={review} />
        //         ))}
        //     </div>
        //   ) : (
        //     <p className="noReviews">No Reviews Yet</p>
        //   )}
        // </Fragment>

        <div className="singleProduct">
      <div className="">
        <div
          style={{
            height: "98vh",
            position: "relative",
            overflowY: "scroll"
          }}
          className="row"
        >
          <div
            style={{
              position: "stickey",
              boxShadow: "1px 0px 4px rgba(214, 200, 200, 0.192)"
            }}
            className="col-4 p-4 d-flex flex-column"
          >
            {product.images &&
                   product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                     key={i}
                   src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
        
            <div className="row justify-between mt-5">
              <div className="col-6">
                {/* <Link className="btn btn-primary fw-bold w-100">
                  {" "}
                  Add to Cart
                </Link> */}
              <button
                  className="btn btn-primary fw-bold w-100"
                  disabled={product.stock < 1 ? true : false}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>
              <div className="col-6">
                <Link className="btn btn-warning fw-bold w-100"> Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="p-4">
              <h3>{product.name}</h3>
              <p>Product # {product._id}</p>
              {/* <h5>
                (8 GB/512 GB SSD/Windows 11 Home) 15s- eq1580AU Thin and Light
                Laptop (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)
              </h5> */}
              
              <div className="d-flex aline-center gap-3 my-2">
                <button className="btn btn-success py-1 px-2 d-flex aline-center gap-1 text-white">
                  4.3 <AiOutlineStar />
                </button>
                <h5 className=" text-secondary">
                  33,781 Ratings & 3041 Reviews
                </h5>
              </div>
              <div className="d-flex gap-3 aline-center my-1">
                <h4 className="fw-bold">₹41,890</h4>
                <del className="fw-bold text-muted">₹57,890</del>
                <h5 className="text-danger fw-bold"> 27 % off</h5>
              </div>
              <div className="d-flex gap-3 aline-center my-1">
                 <p>{product.description}</p>
               
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </Fragment>

    
  );
};

export default ProductDetails;
