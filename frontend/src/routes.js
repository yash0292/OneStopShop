// core components
import Dashboard from "views/admin/Dashboard.js";
import Customers from "views/admin/Customers.js";
import Icons from "views/admin/Icons.js";
import Login from "views/auth/Login.js";
// import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import Grain from "@material-ui/icons/Grain";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: Grain,
    iconColor: "Primary",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: PeopleOutlineIcon,
    iconColor: "Primary",
    component: Customers,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
  {
    divider: true,
  },
];
export default routes;
