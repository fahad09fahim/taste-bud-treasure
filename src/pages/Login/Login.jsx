import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/image.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
  const { signinUser ,handleGoogleLogin } = useContext(AuthContext);

const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || "/"


  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signinUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from,{replace:true})
        
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });

    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mx-auto">
            <img
              className="h-96 w-auto rounded-lg hidden lg:block"
              src={img}
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-secondary"
                    type="submit"
                    value="Log in"
                  />
                </div>
              </form>
              <h3 className="text-center">or sign in with</h3>
              {/* login with facebook and google */}
              <div className="flex gap-3 justify-center">
                <button>
                  <IoLogoFacebook className="h-7 w-7 text-blue-600" />
                </button>
                <Link  onClick={handleGoogleLogin} >
                  <FcGoogle className="h-7 w-7" />
                </Link>
              </div>
              <h3 className="text-center">
                New to Taste Bud?{" "}
                <Link className="text-orange-500" to="/signup">
                  sign up
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
