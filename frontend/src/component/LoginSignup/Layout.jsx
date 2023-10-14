import React from "react";
// import Header from "../layout/Header/Header";
// import Footer from "../layout/Footer/Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
        <Helmet>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        {/* <Header />
        <main style={{ minHeight: "45.5vh" }}>
          <ToastContainer />
          {children}
        </main>
        <Footer /> */}
    </>
  );
};

Layout.defaultProps = {
  titlle: "Kasper Infotech- Shop Now",
  description: "Online Laptop Store",
  Keywords:
    "Laptop, Gaming Laptop, Graphic Lapto, Latest Laptop, Best Laptop, affordable Laptop",
  author: "Kasper",
};

export default Layout;
