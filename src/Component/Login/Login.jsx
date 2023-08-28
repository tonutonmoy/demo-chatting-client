import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from "../../Provider/Provider";
import { useNavigate } from "react-router-dom";


const Login = () => {




    const { loginUser } = useContext(ContextProvider)
  
    const navigate= useNavigate()
  
    const formHandler = (e) => {
  
      event.preventDefault();
  
      
      const email = e.target.email.value
      const password = e.target.password.value




      loginUser(email,password)
      .then(()=>{

        toast.success("register");

                navigate('/chatting')

      })
      .catch(error=> console.log(error))

    }


    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <form onSubmit={formHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value='Login' className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
    );
};

export default Login;