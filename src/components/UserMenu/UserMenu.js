import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOutUser } from "../../redux/auth/authOperations";
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={s.box}>
      <span >Welcome, {user.name}</span>
      <button type="button" className={s.button} onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
}
