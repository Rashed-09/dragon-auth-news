import { useContext } from "react";
import { CreatedContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(CreatedContext)
  const navigate = useNavigate()

  // Register Handlar
  const registerHandlar = e => {
    e.preventDefault()
    // Alternative option to get input value
    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    const email = form.get("email")
    const password = form.get("password")
    

    // create user promise
    createUser(email, password)
    .then(res => {
      e.target.reset()
      navigate("/")
      console.log(res.user);
    })
    .catch(erro => console.log(erro.message))
  }
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center font-bold mt-4 text-2xl">Register Now</h1>
          <form onSubmit={registerHandlar} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                name="password"
                placeholder="password"
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;