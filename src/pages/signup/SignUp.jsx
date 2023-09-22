
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const SignUp = () => {
   const {createUser}= useContext(AuthContext)
 
    const navigate = useNavigate()
    const handlesignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser( email, password)
        .then(res=>{
          const user = res.user;
          console.log(user)
          navigate('/')
        })
        .catch(err=>{
          console.log(err)
        })
      
      console.log(name, email, password)
     
    }
    return (
        <div>
        <div className="hero min-h-screen bg-transparent">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handlesignUp} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
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
                <input className="btn btn-secondary" type="submit" value="Sign up" />
                </div>
                </form>
                <h3 className="text-center">or sign up with</h3>
                {/* login with facebook and google */}
                <div className="flex gap-3 justify-center">
                   <button><IoLogoFacebook className="h-7 w-7 text-blue-600"/></button>
                  <button><FcGoogle className="h-7 w-7"/></button>
                </div>
                <h3 className="text-center">Already have an Account? <Link className="text-orange-500" to="/login">sign up</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;