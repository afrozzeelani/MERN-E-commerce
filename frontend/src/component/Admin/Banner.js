// import React, {Fragment, useState } from 'react'
// // import Header from '../../component/Header'
// // import Footer from '../../component/Footer'
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import SideBar from "./Sidebar";
// import { Button } from "@material-ui/core";



// const AdminAddBanner = () => {

//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(false);

//     console.log("images", images);

//     //handlde images
//     const handleImage = (e) =>{
//         const files = Array.from(e.target.files);
//         files.forEach(file =>{
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onloadend = () =>{
//                 setImages(oldArray => [...oldArray, reader.result ])
//             }
//         })

//     }

//         //submit the form
//     const submitForm = async (e) =>{
//         setLoading(true);
//         e.preventDefault();
//         try {
//             const {data} = await axios.post('/api/banner/create', { images})
//             if  (data.success === true){
//                 setLoading(false);
//                 setImages([]);
//                 toast.success('slide created successfully')
//             }
//             console.log(data);
//         } catch (error) {
//             console.log(error)
//             toast.error(error);
//         }

//     }


//   return (
//     <>
//    <Fragment>
//       <div className="dashboard">
//         <SideBar />
//         <div className="newProductContainer">
//           <form
//             className="createProductForm"
//             encType="multipart/form-data"
//             onSubmit={submitForm}
//           >
//             <h1>Create Banner</h1>

//             <div>
//               <SpellcheckIcon />
//               <input
//                 type="file"
//                 placeholder="Product Name"
//                 required
//                 onChange={handleImage}
//               />
//             </div>
  
//             <Button
//               id="createProductBtn"
//               type="submit"
//               disabled={loading ? true : false}
//             >
//             {loading ? "Uploading..." : "Create Slider"}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//     </>
//   )
// }

// export default AdminAddBanner

import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { Button } from "@material-ui/core";
import './banner.css'; // Import your CSS file

const AdminAddBanner = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  console.log("images", images);

  // Handle images
  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages(oldArray => [...oldArray, reader.result]);
      }
    });
  }

  // Submit the form
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post('/api/banner/create', { images });
      if (data.success === true) {
        setLoading(false);
        setImages([]);
        toast.success('Banner created successfully');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage('Error creating banner');
      toast.error('Error creating banner');
    }
  }

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={submitForm}
          >
            <h1>Create Banner</h1>
            <div>
              <SpellcheckIcon />
              <input
                type="file"
                placeholder="Product Name"
                required
                onChange={handleImage}
              />
            </div>
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              {loading ? "Uploading..." : "Create Banner"}
            </Button>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {images.length > 0 && (
              <div className="uploaded-images">
                <h2>Uploaded Images:</h2>
                <ul>
                  {images.map((image, index) => (
                    <li key={index}>
                      <img src={image} alt={`Uploaded ${index + 1}`} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminAddBanner;
