import { useContext } from "react";
import { CreatedContext } from "../AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {logInWithEmailAndPassword} = useContext(CreatedContext)
  const location = useLocation()
  const navigate = useNavigate()
  const logInHandlar = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    // logIn Promise 
    logInWithEmailAndPassword(email, password)
    .then (() => {
      navigate(location?.state ? location.state : "/")
    })
    .catch( error => console.log(error.message))
  }
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center font-bold mt-4 text-2xl">Login</h1>
          <form onSubmit={logInHandlar} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;