import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../redux/features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // const memoizedUser = useMemo(() => user, [user]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  // useEffect(() => {}, []);

  return (
    <header className="header flex">
      <div className="logo">
        <Link to={"/"}>GoalSetter</Link>
      </div>
      <ul>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/login"}>
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to={"/register"}>
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
        {/* </Suspense> */}
      </ul>
    </header>
  );
};

export default Header;
