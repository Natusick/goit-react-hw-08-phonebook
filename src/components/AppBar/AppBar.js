import { NavLink } from "react-router-dom";
import{useAuth} from "../../hooks/useAuth";
import UserMenu from "../../components/UserMenu/UserMenu";
import AuthNav from "../AuthNav";
import s from "./AppBar.module.css";

export const AppBar = () => {
    const {isLoggedIn} = useAuth();
  return (
    <header >
      <NavLink to="/"
        className={s.page}>
        Home
      </NavLink>
      
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;