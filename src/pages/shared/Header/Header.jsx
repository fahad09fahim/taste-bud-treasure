import { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../Provider/AuthProvider";
const Header = () => {
  const {user , logOut} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = ()=>{
    logOut()
    .then(()=>{
    navigate('/')  
    })
    .catch(err=> console.log(err))
  }
  
  return (
    <div className="mb-10">
      <div className="navbar h-11  shadow-xl p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 text-center"
            >
              <Link to="/" className="custom-btn  my-2">
                <span>Home</span>
              </Link>

              <Link className="custom-btn my-2">
                <span>Blog</span>
              </Link>
              
         { user?
         <button onClick={handleLogout} className="custom-btn">Log out</button>         :
         <Link className="custom-btn" to="/login">Log in</Link>}

            </ul>
          </div>

          <img
            src={logo}
            className="lg:mx-0   md:mx-1 sm:mx-8"
            style={{ height: "100px", width: "100px" }}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center gap-2 ">
            <Link to="/" className="custom-btn">
              <span className="mt-1">Home</span >
            </Link>

            <Link className="custom-btn">
              <span>Blog</span>
            </Link>

            { user && <div className="avatar navbar-end lg:hidden sm:flex md:flex">
            <div className="w-7 ml-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>}
          </ul>
        </div>
        <div className="navbar-end mr-6 hidden lg:flex">
        { user?
         <button onClick={handleLogout} className="custom-btn">Log out</button>         :
         <Link className="custom-btn" to="/login">Log in</Link>}
        </div>
        { user && <div className="avatar navbar-center  sm:flex md:flex">
            <div className="w-7 ml-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>}
      </div>
     

    </div>
  );
};

export default Header;
