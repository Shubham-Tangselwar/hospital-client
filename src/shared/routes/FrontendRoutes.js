import React, { lazy } from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
const Home = lazy(() => import("../../features/frontend/home/Home"));
const Contact = lazy(() => import("../../features/frontend/contact/Contact"));
const Login = lazy(() => import("../../features/frontend/login/Login"));
const HospitalRegistration = lazy(() =>
  import("../../features/frontend/hospital-registration/HospitalRegistration")
);
const ResetLink = lazy(() =>
  import("../../features/frontend/resetPassword/ResetLink")
);
const ChangePassword = lazy(() =>
  import("../../features/frontend/resetPassword/ChangePassword")
);

export default [
  {
    title: "Home",
    component: <Home />,
    showInMenu: true,
    path: "/",
    icon: <HomeRoundedIcon />,
  },
  {
    title: "Contact",
    component: <Contact />,
    showInMenu: true,
    path: "/contact",
    icon: <CallRoundedIcon />,
  },
  {
    title: "Login",
    component: <Login />,
    showInMenu: true,
    path: "/login",
    icon: <AccountCircle />,
  },
  {
    title: "Hospital Registration",
    component: <HospitalRegistration />,
    showInMenu: true,
    path: "/register",
    icon: <LocalHospitalRoundedIcon />,
  },
  {
    title: "Password Reset Link",
    component: <ResetLink />,
    showInMenu: false,
    path: "/resetLink",
    icon: "",
  },
  {
    title: "Change Password",
    component: <ChangePassword />,
    showInMenu: false,
    path: "/change-password/:token",
    icon: "",
  },
];
