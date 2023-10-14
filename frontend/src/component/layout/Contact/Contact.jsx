import React from "react";
import "./Contact.css";
import contactIMG from "../../../images/Contactus.jpg"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillGoogleCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const Contact = () => {
  return (
    <div className="contact-us">
    <div className="container">
      <div className="row py-5 justify-between">
        <div className="col-6">
          <div className="img-holder w-100">
            <img className="w-100 rounded" src={contactIMG} alt="" />
          </div>
        </div>
        <div className="col-6">
          <div className="w-100">
            <h3 className="fs-2 fw-bold">- CONTACT US -</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores excepturi cumque possimus commodi, nostrum, impedit
              obcaecati tempore velit saepe eligendi alias. Expedita illum
              consequatur, ullam mollitia modi iure quam unde?
            </p>
            <p><EmailIcon/> : www.help@kasperinfotech.org </p>
            <p><CallIcon/> : +91-800-623-6800 </p>
            <p><CallIcon/> : 1800-0000-0000 (toll free) </p>
            <div className="d-flex w-50 mt-4 justify-content-between aline-center">
              <Link> <AiFillInstagram className="fs-2 text-danger"/></Link>
              <Link> <AiFillFacebook className="fs-2 text-danger"/></Link>
              <Link> <AiFillTwitterSquare className="fs-2 text-danger"/></Link>
              <Link> <AiFillYoutube className="fs-2 text-danger"/></Link>
              <Link> <AiFillGoogleCircle className="fs-2 text-danger"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
