import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../redux/features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { name, email, phone, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, IsError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (IsError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, IsError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !password || !password2) {
      toast.error("please fill all required fields!");
    }
    if (password !== password2) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        name,
        email,
        phone,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {/* <div className="container"> */}
      {/* <section className="heading">
          <div className="">
            <FaUser className="text-xl" />
            <h1>Register</h1>

          </div>
          <p>Please create an account</p>
        </section> */}

      <section className="heading">
        <h3>
          <FaUser className="text-sm" /> Register
        </h3>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="phone"
              id="phone"
              className="form-control"
              name="phone"
              value={phone}
              placeholder="Enter your mobile number"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password2"
              className="form-control"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register
            </button>
          </div>
        </form>
      </section>
      {/* </div> */}
    </>
  );
};

export default Register;
