// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   Button,
//   IconButton,
//   Drawer,
//   Link,
//   MenuItem,
// } from "@material-ui/core";

// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import Badge from "@mui/material/Badge";
// import MenuIcon from "@material-ui/icons/Menu";
// import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Kasper from "../../../images/Kasper.png";
// import { useSelector } from "react-redux";
// import HomeIcon from "@mui/icons-material/Home";
// import CategoryIcon from "@mui/icons-material/Category";
// import SearchIcon from "@mui/icons-material/Search";
// import AttractionsIcon from "@mui/icons-material/Attractions";
// import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
// import Tooltip from "@mui/material/Tooltip";
// import Zoom from "@mui/material/Zoom";
// import { red } from "@material-ui/core/colors";

// const useStyles = makeStyles(() => ({
//   header: {
//     // background: "linear-gradient(to right, rgb(255, 210, 0) 50%, #fe8c00)",
//     paddingRight: "0px",
//     paddingLeft: "0px",
//     zIndex: 8,
//     "@media (max-width: 900px)": {
//       // paddingLeft: 0,
//     },
//   },
//   img:{
// background: red,
//   },
//   logo: {
//     height: 80,
//     width: 150,
//     fontFamily: "Work Sans, sans-serif",
//     fontWeight: 600,
//     color: "black",
//     textAlign: "right",
//   },
//   menuButton: {
//     fontFamily: "Open Sans, sans-serif",
//     fontWeight: 600,
//     fontSize: "18px",
//     marginLeft: "1vmax",
//     "@media (max-width: 1000px)": {
//       fontSize: "15px",
//     },
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//    background: "rgb(0,140,186)",
//   },
//   drawerContainer: {
//     padding: "10px",
//   },
// }));

// export default function Header() {
//   const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
//   const { cartItems } = useSelector((state) => state.cart);

//   const headersData = [
//     {
//       label: (
//         <Tooltip title="Home" arrow TransitionComponent={Zoom}>
//           <HomeIcon style={{ fontSize: "35PX" }} />
//         </Tooltip>
//       ),
//       href: "/",
//     },
//     {
//       label: (
//         <Tooltip title="Products" arrow TransitionComponent={Zoom}>
//           <CategoryIcon style={{ fontSize: "35PX" }} />
//         </Tooltip>
//       ),
//       href: "/products",
//     },
//     {
//       label: (
//         <Tooltip title="About" arrow TransitionComponent={Zoom}>
//           <AttractionsIcon style={{ fontSize: "35PX" }} />
//         </Tooltip>
//       ),
//       href: "/about",
//     },
//     {
//       label: (
//         <Tooltip title="Contact" arrow TransitionComponent={Zoom}>
//           <LocalPostOfficeIcon style={{ fontSize: "35PX" }} />
//         </Tooltip>
//       ),
//       href: "/contact",
//     },
//     {
//       label: (
//         <Tooltip title="Search" arrow TransitionComponent={Zoom}>
//           <SearchIcon style={{ fontSize: "35PX" }} />
//         </Tooltip>
//       ),
//       href: "/search",
//     },

//     {
//       label: (
//         <Tooltip title="Cart" arrow TransitionComponent={Zoom}>
//           <Badge badgeContent={cartItems.length} color="error">
//             <LocalMallIcon
//               style={{
//                 fontSize: "35PX",
//                 color: cartItems.length > 0 ? "black" : "unset",
//               }}
//             />
//           </Badge>
//         </Tooltip>
//       ),
//       href: "/cart",
//     },
//     {
//       label: (
//         <Tooltip title="Account" arrow TransitionComponent={Zoom}>
//           <AccountCircleIcon style={{ fontSize: "35PX" }} />
//         </Tooltip>
//       ),
//       href: "/login",
//       name: "Dashboard",
//     },
//   ];



//   // mobile header

//   const headersDataMobile = [
//     {
//       label: (
//         <IconButton style={{ color: "white", fontWeight: "bold" }}>
//           <HomeIcon style={{ fontSize: "35PX" }} />
//           Home
//         </IconButton>
//       ),
//       href: "/",
//     },

//     {
//       label: (
//         <IconButton style={{ color: "white", fontWeight: "bold" }}>
//           <AttractionsIcon style={{ fontSize: "35PX" }} />
//           About
//         </IconButton>
//       ),
//       href: "/about",
//     },
//     {
//       label: (
//         <IconButton style={{ color: "white", fontWeight: "bold" }}>
//           <LocalPostOfficeIcon style={{ fontSize: "35PX" }} />
//           Contact
//         </IconButton>
//       ),
//       href: "/contact",
//     },
//     {
//       label: (
//         <IconButton style={{ color: "white", fontWeight: "bold" }}>
//           <CategoryIcon style={{ fontSize: "35PX" }} />
//           Product
//         </IconButton>
//       ),
//       href: "/products",
//     },

//     {
//       label: (
//         <IconButton style={{ color: "white", fontWeight: "bold" }}>
//           <SearchIcon style={{ fontSize: "35PX" }} />
//           Search
//         </IconButton>
//       ),
//       href: "/search",
//     },
//     {
//       label: (
//         <IconButton style={{ color: "white", fontWeight: "bold" }}>
//           <Badge badgeContent={cartItems.length} color="error">
//             <LocalMallIcon
//               style={{
//                 fontSize: "35PX",
//                 color: cartItems.length > 0 ? "black" : "unset",
//               }}
//             />
//           </Badge>
//           Cart
//         </IconButton>
//       ),
//       href: "/cart",
//     },
//     {
//       label: (
//         <IconButton style={{ color: "white", fontWeight: "bold" }}>
//           <AccountCircleIcon style={{ fontSize: "35PX" }} />
//           Account
//         </IconButton>
//       ),
//       href: "/login",
//     },
//   ];

//   const [state, setState] = useState({
//     mobileView: false,
//     drawerOpen: false,
//   });

//   const { mobileView, drawerOpen } = state;

//   useEffect(() => {
//     const setResponsiveness = () => {
//       return window.innerWidth < 900
//         ? setState((prevState) => ({ ...prevState, mobileView: true }))
//         : setState((prevState) => ({ ...prevState, mobileView: false }));
//     };

//     setResponsiveness();

//     window.addEventListener("resize", () => setResponsiveness());

//     return () => {
//       window.removeEventListener("resize", () => setResponsiveness());
//     };
//   }, []);

//   const displayDesktop = () => {
//     return (
//       <Toolbar className={toolbar}>
//         {femmecubatorLogo}
//         <div>{getMenuButtons()}</div>
//       </Toolbar>
//     );
//   };

//   const displayMobile = () => {
//     const handleDrawerOpen = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: true }));
//     const handleDrawerClose = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: false }));

//     return (
//       <Toolbar>
//         <IconButton
//           {...{
//             edge: "start",
//             color: "inherit",
//             "aria-label": "menu",
//             "aria-haspopup": "true",
//             onClick: handleDrawerOpen,
//           }}
//         >
//           <MenuIcon style={{ fontSize: "35PX" }} />
//         </IconButton>

//         <Drawer
//           {...{
//             anchor: "left",
//             open: drawerOpen,
//             onClose: handleDrawerClose,
//           }}
//         >
//           <div className={drawerContainer}>
//             {mobileSideBarLogo}
//             {getDrawerChoices()}
//           </div>
//         </Drawer>
//         <div>{femmecubatorLogo}</div>
//       </Toolbar>
//     );
//   };

//   const getDrawerChoices = () => {
//     return headersDataMobile.map(({ label, href }) => {
//       return (
//         <Link
//           {...{
//             component: RouterLink,
//             to: href,
//             color: "inherit",
//             style: { textDecoration: "none" },
//             key: label,
//           }}
//         >
//           <MenuItem>{label}</MenuItem>
//         </Link>
//       );
//     });
//   };

//   const femmecubatorLogo = (
//     <Link href="/">
//       <Typography className={logo}>
//         <img
//           style={{
//             height: 80,
//             width: 150,
//           }}
//           src={Kasper}
//           alt="Logo"
//         />
//       </Typography>
//     </Link>
//   );

//   const mobileSideBarLogo = (
//     <Link href="/">
//       <Typography>
//         <img
//           style={{
//             height: 100,
//             width: 200,
//           }}
//           src={Kasper}
//           alt="Logo"
//         />
//       </Typography>
//     </Link>
//   );

//   const getMenuButtons = () => {
//     return headersData.map(({ label, href }) => {
//       return (
//         <Button
//           {...{
//             key: label,
//             color: "inherit",
//             to: href,
//             component: RouterLink,
//             className: menuButton,
//           }}
//         >
//           {label}
//         </Button>
//       );
//     });
//   };

//   return (
//     <header>
//       <AppBar className={header}>
//         {mobileView ? displayMobile() : displayDesktop()}
//       </AppBar>
//     </header>
//   );
// }


import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Kasper from "../../../images/Kasper.png";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";


const useStyles = makeStyles(() => ({
  header: {
    paddingRight: "0px",
    paddingLeft: "0px",
    zIndex: 8,
    "@media (max-width: 900px)": {
      // paddingLeft: 0,
    },
  },
  img: {
    background: red,
  },
  logo: {
    height: 80,
    width: 150,
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "black",
    textAlign: "right",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    marginLeft: "1vmax",
    "@media (max-width: 1000px)": {
      fontSize: "15px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "rgb(0,140,186)",
  },
  drawerContainer: {
    padding: "10px",
  },
  label:{
  fontSize:"20px"
  }
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const { cartItems } = useSelector((state) => state.cart);

  const headersDataLeft = [
    {
      label: "Home",
      icon: <HomeIcon style={{ fontSize: "25px" }} />,
      href: "/",
    },
    {
      label: "Products",
      icon: <CategoryIcon style={{ fontSize: "25px" }} />,
      href: "/products",
    },
    {
      label: "About",
      icon: <AttractionsIcon style={{ fontSize: "25px" }} />,
      href: "/about",
    },
    {
      label: "Contact",
      icon: <LocalPostOfficeIcon style={{ fontSize: "25px" }} />,
      href: "/contact",
    },
  ];

  const headersDataRight = [
    {
      label: "",
      icon: <SearchIcon style={{ fontSize: "30px" }} />,
      href: "/search",
    },
    {
      label: "",
      icon: (
        <Badge badgeContent={cartItems.length} color="error">
          <LocalMallIcon
            style={{
              fontSize: "30px",
              color: cartItems.length > 0 ? "black" : "unset",
            }}
          />
        </Badge>
      ),
      href: "/cart",
    },
    {
      label: "",
      icon: <FavoriteIcon style={{ fontSize: "30px" }} />,
      href: "/favorites",
    },
    {
      label: "",
      icon: <AccountCircleIcon style={{ fontSize: "30px" }} />,
      href: "/myaccount",
    },
  ];

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons(headersDataLeft)}</div>
        <div>{getMenuButtons(headersDataRight)}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon style={{ fontSize: "35px" }} />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {mobileSideBarLogo}
            {getDrawerChoices()}
          </div>
        </Drawer>
        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersDataLeft.map(({ label, icon, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>
            <IconButton style={{ color: "red", fontWeight: "bold" }}>
              {icon}
              {label}
            </IconButton>
          </MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link href="/">
      <Typography className={logo}>
        <img
          style={{
            height: 80,
            width: 150,
          }}
          src={Kasper}
          alt="Logo"
        />
      </Typography>
    </Link>
  );

  const mobileSideBarLogo = (
    <Link href="/">
      <Typography>
        <img
          style={{
            height: 100,
            width: 200,
          }}
          src={Kasper}
          alt="Logo"
        />
      </Typography>
    </Link>
  );

  const getMenuButtons = (headers) => {
    return headers.map(({ label, icon, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {icon}
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
