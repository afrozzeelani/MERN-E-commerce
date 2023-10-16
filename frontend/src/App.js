import "./App.css";
// import Header from "./component/layout/Header/Header.js";
import Headers from "./component/layout/Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
// import LoginSignup from "./component/User/LoginSignup";
import LoginUSER from "./component/LoginSignup/LoginUSER";
import RegisterUSER from "./component/LoginSignup/RegisterUSER";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
// import ForgotPassword from "./component/User/ForgotPassword.js";
import ForgotPassword from "./component/LoginSignup/ForgetPassword";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Wishlist from "./component/Cart/Wishlist.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact.jsx";
import NotFound from "./component/layout/Not Found/NotFound.js";
import AdminAddBanner from "./component/Admin/Banner";
import BannerList from "./component/Admin/BannerList";
import 'bootstrap/dist/css/bootstrap.min.css'
// import UserPannel from "./component/layout/Header/UserPannel";
import UserPannel from "./component/User/USERPANNEL/UserPannel";
import UserProfile from "./component/User/USERPANNEL/UserProfile";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Headers />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/login" element={<LoginUSER />} /> */}
        <Route path="/register" element={<RegisterUSER />} />
        <Route path="/login" element={<LoginUSER />} />
        
        
        
        <Route path="/myaccount" element={<UserPannel />}>
          <Route index element={<UserProfile />} />
          {/* <Route path="UserProfile" element={<UserProfile />} />
          <Route path="UserWishlist" element={<UserWishlist />} />
          <Route path="Change&User&password" element={<Userpassword />} />
          <Route path="User-Order" element={<UserOrder />} /> */}
        </Route>

        <Route
          path="/account"
          element={isAuthenticated ? <Profile /> : <LoginUSER />}
        />
        <Route
          path="/me/update"
          element={isAuthenticated ? <UpdateProfile /> : <LoginUSER />}
        />
        <Route
          path="/password/update"
          element={isAuthenticated ? <UpdatePassword /> : <LoginUSER />}
        />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/wishlist"
          element={isAuthenticated ? <Wishlist /> : <LoginUSER />}
        />
        <Route
          path="/shipping"
          element={isAuthenticated ? <Shipping /> : <LoginUSER />}
        />
        <Route
          path="/order/confirm"
          element={isAuthenticated ? <ConfirmOrder /> : <LoginUSER />}
        />
        <Route
          path="/process/payment"
          element={
            isAuthenticated ? (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            ) : (
              <LoginUSER />
            )
          }
        />
        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route
              path="/process/payment"
              element={isAuthenticated ? <Payment /> : <LoginUSER />}
            />
          </Elements>
        )} */}
        <Route
          path="/success"
          element={isAuthenticated ? <OrderSuccess /> : <LoginUSER />}
        />
        <Route
          path="/orders"
          element={isAuthenticated ? <MyOrders /> : <LoginUSER />}
        />
        <Route
          path="/order/:id"
          element={isAuthenticated ? <OrderDetails /> : <LoginUSER />}
        />
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated && user.role === "admin" ? (
              <Dashboard />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/products"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProductList />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/product"
          element={
            isAuthenticated && user.role === "admin" ? (
              <NewProduct />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/product/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UpdateProduct />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/orders"
          element={
            isAuthenticated && user.role === "admin" ? (
              <OrderList />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/order/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProcessOrder />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/users"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UsersList />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/user/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UpdateUser />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/reviews"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProductReviews />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/Banner"
          element={
            isAuthenticated && user.role === "admin" ? (
              <AdminAddBanner />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route
          path="/admin/bannerList"
          element={
            isAuthenticated && user.role === "admin" ? (
              <BannerList />
            ) : (
              <LoginUSER />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
