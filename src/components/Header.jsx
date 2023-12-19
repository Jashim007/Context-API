import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <ul className="flex items-center justify-center py-5 h-20 text-lg font-bold bg-slate-700 text-white w-screen space-x-10">
        <li className="hover:scale-105 active:scale-100">
          <NavLink to="/">Login</NavLink>
        </li>
        <li className="hover:scale-105 active:scale-100">
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
