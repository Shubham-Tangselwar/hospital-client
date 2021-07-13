import React, { lazy } from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PatientIcon from "@material-ui/icons/Group";
import HospitalIcon from "@material-ui/icons/LocalHospital";
import UserIcon from "@material-ui/icons/People";
const Dashboard = lazy(() =>
  import("../../features/admin/dashboard/Dashboard")
);
const User = lazy(() => import("../../features/admin/user/Uses"));
const Patient = lazy(() => import("../../features/admin/patient/Patient"));
const Hospital = lazy(() => import("../../features/admin/hospital/Hospital"));

export default [
  {
    title: "Dashboard",
    component: <Dashboard />,
    path: "/",
    showInMenu: true,
    icon: <DashboardIcon />,
    accessTo: "all",
  },
  {
    title: "User",
    component: <User />,
    path: "/user",
    showInMenu: true,
    icon: <UserIcon />,
    accessTo: "superadmin",
  },
  {
    title: "Patient",
    component: <Patient />,
    path: "/patient",
    showInMenu: true,
    icon: <PatientIcon />,
    accessTo: "all",
  },
  {
    title: "Hospital",
    component: <Hospital />,
    path: "/hospital",
    showInMenu: true,
    icon: <HospitalIcon />,
    accessTo: "all",
  },
];
