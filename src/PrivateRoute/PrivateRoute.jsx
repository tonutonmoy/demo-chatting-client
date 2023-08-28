import { useContext } from "react";
import { ContextProvider } from "../Provider/Provider";


const PrivateRoute = ({children}) => {

    const { user,loading } = useContext(ContextProvider);


    if(loading){
        return <div>loading...</div>
    }
    if(user){
        return children 
    }
      

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;