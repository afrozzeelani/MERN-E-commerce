// import React from "react";
// import "./Footer.css";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import { Link } from "react-router-dom";
// import AttractionsIcon from "@mui/icons-material/Attractions";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";
// import CategoryIcon from "@mui/icons-material/Category";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div className="footerContainer">
//         <div className="leftFooter">
//           <h4>Quick's Link</h4>
//           <Link className="quickLink" to="/about">
//             <AttractionsIcon />
//             About us
//           </Link>
//           <Link className="quickLink" to="/contact">
//             <AddIcCallIcon />
//             Contact us
//           </Link>
//           <Link className="quickLink" to="/products">
//             <CategoryIcon />
//             Products
//           </Link>
//           <Link className="quickLink" to="/login">
//             <ExitToAppIcon />
//             SignIn
//           </Link>
//         </div>

//         {/* <div className="midFooter">
//           <h1>MEW</h1>
//           <h3>Men's Ethnic Wear</h3>
//           <p>
//             MEW is a marketplace model to capture the regional and traditional
//             variations of India.
//           </p>
//           <p>"'Discover Ethnic Indian Products'"</p>
//           <p className="copy">Copyrights 2022 &copy;MEW </p>
//         </div> */}

//         <div className="rightFooter">
//           <h4>Follow Us</h4>
//           <a href="https://twitter.com/">
//             <TwitterIcon className="twitterSvgIcon" />
//             Twitter
//           </a>
//           <a href="http://youtube.com">
//             <YouTubeIcon className="youtubeSvgIcon" />
//             Youtube
//           </a>
//           <a href="http://instagram.com">
//             <InstagramIcon className="instagramSvgIcon" />
//             Instagram
//           </a>
//           <a href="http://facebook.com">
//             <FacebookIcon className="facebookSvgIcon" />
//             Facebook
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'
// import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import Payment from '../../../images/payment-methods.png'
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <footer title={"Contact-US"} className='bg-dark pt-4 pb-2'>
      <div className="container gap-2 ">
        <div className="row row-gap-4">
        <div className="col-6 col-sm-3">
          <h4 className='text-white'>LOGO</h4>
          <div>
            <li><Link className='text-white'>Who we are?</Link></li>
            <li> <Link className='text-white'>Terms & Conditions</Link></li>
            <li><Link className='text-white'>Privacy Policy</Link></li>
            <li><Link className='text-white'>Fees & Payments</Link></li>
            <li><Link className='text-white'>Returns & Refunds</Link></li>
          </div>
      </div>
        <div className="col-6 col-sm-3 gap-2">
          <h4 className='text-white'>Help</h4>
          <div >
            <li><Link className='text-white'>Track Your Order</Link></li>
            <li><Link className='text-white'>Returns</Link></li>
            <li><Link className='text-white'>Cancellations</Link></li>
            <li><Link className='text-white'>Payments</Link></li>
            <li><Link className='text-white'>Customer Care</Link></li>
          </div>
        </div>
        <div className="col-6 col-sm-3 gap-2">
          <h4 className='text-white'>Shop by</h4>
          <div>
            <li><Link className='text-white'>Graphics Laptop</Link></li>
            <li><Link className='text-white'>Gaming Laptop</Link></li>
            <li><Link className='text-white'>Development Laptop</Link></li>
            <li><Link className='text-white'>Office Laptop</Link></li>
            <li><Link className='text-white'>Education Laptop</Link></li>
          </div>             
        </div>
        <div className="col-6 col-sm-3 gap-2">
          <h4 className='text-white'>Follow us</h4>
          <div>
            <li>
              <a className='text-white' target='_blank' href='a'>
              <FacebookIcon/>   - Facebook
              </a>
            </li>
            <li>
              <a className='text-white' target='_blank' href='a'>
              <InstagramIcon/> - Instagram
              </a>
            </li>
            <li>
              <a className='text-white' target='_blank' href='a'>
              <LinkedInIcon/> - Linkedin
              </a>
            </li>
            <li>
              <a className='text-white' target='_blank' href='a'>
              <TwitterIcon/> - Twitter
              </a>
            </li>
            <li>
              <img className='w-50 bg-white' src={Payment} alt="" />
            </li>
          </div>
        </div>
        </div>
      </div>
      <hr style={{background:'white', borderColor:"rgba(255, 255, 255, 0.05)"}} />
      <div className="container d-flex justify-center aline-center pt-1">
        <p className='text-light'>All Right Reserved by <a href="a">Kasper Infotech Pvt Ltd</a> </p>
      </div>
    </footer>
  );
};

export default Footer;