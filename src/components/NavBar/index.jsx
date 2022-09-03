import { NavLink, Outlet, useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"login"}>Login</NavLink>

      <NavLink to={"register"}>Register</NavLink>

      <NavLink to={"auth"}>Auth</NavLink>

      <NavLink to={"profile"}>Profile</NavLink>

      <Outlet />
    </>
  );
}

export default NavBar;
