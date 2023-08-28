import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";




export const ContextProvider = createContext(null)

const Provider = ({ children }) => {



  const auth = getAuth(app);

  const [user, setUser] = useState();
  const [loading,setLoading]=useState(true)

 


  const createUser = (email, password) => {

    setLoading(true)

    return createUserWithEmailAndPassword(auth, email, password)
  };


  const loginUser = (email, password) => {

    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
  };

  const logOutUser = () => {
   

    return signOut(auth)
  };


  const updateUserProfile = (name) => {


    return updateProfile(auth.currentUser, {
        displayName: name
    })

}


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

      setLoading(false)
       setUser(currentUser)
       console.log(currentUser)

  });

  return () => {

      return unSubscribe();
  }

  }, [])


const [userFetch,setUserFetch]=useState(()=>{})
const [adminFetch,setAdminFetch]=useState(()=>{})

  const info = {
    createUser,
    loginUser,
    logOutUser,
    user,
    updateUserProfile,
    userFetch,
    setUserFetch,
    adminFetch,
    setAdminFetch,
    setLoading,
    loading

  }


  return (
    <ContextProvider.Provider value={info} >
      {children}
    </ContextProvider.Provider>
  );
};

export default Provider;