import { useContext, useEffect } from "react";
import { ContextProvider } from "../../Provider/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const Register = () => {

  const { createUser,updateUserProfile } = useContext(ContextProvider)

  const navigate= useNavigate()

  const formHandler = (e) => {

    event.preventDefault();

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    const info = { userName: name, userEmail: email,roll:'user' }

    createUser(email, password)
      .then(res => {

        console.log(res)

        fetch('https://socet-io-server.vercel.app/createUser', {


          method: "POST",

          headers: {

            'content-type': "application/json"
          },


          body: JSON.stringify(info)


        }
        )
          .then(res => res.json())
          .then(res => {

            if (res.insertedId) {


              updateUserProfile(name)
              .then(()=>{

                toast.success("register");

                navigate('/chatting')

              })
              .catch((error)=>{

                console.log(error)
              })

             
            }

            console.log(res)
          })
          .catch(error => console.log(error))



      }


      )
      .catch(error => {

        console.log(error)
      })



  }
















  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <form onSubmit={formHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>
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

export default Register;