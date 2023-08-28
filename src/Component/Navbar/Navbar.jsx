import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Provider/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { logOutUser, user } = useContext(ContextProvider);


    const logOutNavigate = useNavigate();

    const chattingNavigate = useNavigate();


    const chattingHandler = () => {

        if (!user?.email) {
            return toast.error("please login");
        }

        chattingNavigate('/chatting')

    };




    const logOutHandler = () => {

        logOutUser()
            .then(() => {

                toast.success("logOut");

                logOutNavigate('/')

            })

    }

    return (
        <nav className=" space-x-10 flex justify-center">


            {user?.email ? <>

                <Link to='/dashBoard' className="btn bg-yellow-500 text-white">DashBoard</Link>

                <button onClick={logOutHandler} className="btn bg-red-500 text-white">LogOut</button>

            </>

                : <>

                    <Link to='/login' className="btn bg-green-500 text-white">Login</Link>
                    <Link to='/register' className="btn bg-green-500 text-white">Register</Link>

                </>

            }








            <button onClick={chattingHandler} className="btn bg-blue-500 text-white">Chatting</button>
            <Link to='/' className="btn bg-gray-500 text-white">Home</Link>










            <ToastContainer />

        </nav>
    );
};

export default Navbar;