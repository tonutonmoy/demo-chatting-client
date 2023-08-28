import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from "../Provider/Provider";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const DashBoard = () => {

    const { user } = useContext(ContextProvider);

  

    const [allData,setAllData]=useState()


    useEffect(()=>{

       
        fetch(`https://socet-io-server.vercel.app/userData?email=${user?.email}`)
        .then(res=> res.json())
        .then(res=> setAllData(res))
        
    },[user])


    // const { refetch, data: allData = [] } = useQuery({
    //     queryKey: ['userData',user?.email],
      
      
    
    //     queryFn: async () => {
    
    //       const res = await fetch(`https://socet-io-server.vercel.app/userData?email=${user?.email}`)
    
    //       return res.json()
    //     },
    
       
    
        
    //   })
    





    return (
        <div>
           


            <div className=" flex gap-[30px]">

                <section className=" bg-green-500 space-y-10 py-10 h-[900px] px-10" >
                    <div>
                        <Link to='/' className=" text-white font-[500] text-[20px]">Home</Link>
                    </div>
                    <div>
                        <Link to='profile' className=" text-white font-[500] text-[20px]">Profile</Link>
                    </div>
                   
                   {allData?.roll==='admin' &&  <div>
                        <Link to='allChats' className=" text-white font-[500] text-[20px]">All Chats</Link>
                    </div>}
                   
                </section>


                <section className="w-full">

              
                <Outlet></Outlet>
                </section>
            </div>

           
        </div>
    );
};

export default DashBoard;