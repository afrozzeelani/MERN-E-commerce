import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./ProductCard.js";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
// import Carousel from "react-material-ui-carousel";
// import ban2 from "../../images/ban2.webp";
// import ban8 from "../../images/ban8.jpg";
// import Banner1 from "../../images/OfferBanner.png"
// import Banner2 from "../../images/Banner.png"
import { Link } from "react-router-dom";
import MoreProductBanner from "../../images/ethnic-mens (1).jpg";
import Banner from "../Banner/Banner";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="banner">
            {/* <Carousel>
              <img src={Banner2} className="banImg" alt="Carousel" />
              <img src={Banner1} className="banImg" alt="Carousel " />
              <img src={ban8} className="banImg" alt="Carousel " />
            </Carousel> */}
            <Banner />

            
            <a href="#container">
              <button>View Collections</button>
            </a>
          </div>
         
        <div className="container pt-0 pb-5" id="container">
        <div className="col-sm-12">
        <h2 className="homeHeading">
            Featured Products
          </h2>
          <div className="row">
            {products &&
              products.map((product) => (
                <Product product={product}
                />
              ))}
          </div>
        </div>
        </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
