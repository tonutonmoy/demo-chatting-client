import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../Provider/Provider";
import { useQuery } from "@tanstack/react-query";


const DashBoardProfile = () => {

    const { user } = useContext(ContextProvider);

    // const [allData,setAllData]=useState()


    


    const { refetch, data: allData = [] } = useQuery({
        queryKey: ['allUserData',],



        queryFn: async () => {

          const res = await fetch(`https://socet-io-server.vercel.app/userData?email=${user?.email}`)

          return res.json()
        },




      })







    // useEffect(()=>{

       
    //     fetch(`https://socet-io-server.vercel.app/userData?email=${user?.email}`)
    //     .then(res=> res.json())
    //     .then(res=> setData(res))
        
    // },[user])


    console.log(allData)
    return (
        <div className=" mt-[200px] w-[50%] mx-auto">
            <div className="flow-root">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
   

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900 text-[20px]">Name</dt>
      <dd className="text-gray-700 sm:col-span-2 text-[20px]">{allData?.userName}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900 text-[20px]">Email</dt>
      <dd className="text-gray-700 sm:col-span-2 text-[20px]">{allData?.userEmail}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900 text-[20px]">Roll</dt>
      <dd className="text-gray-700 sm:col-span-2 text-[20px]">{allData?.roll}</dd>
    </div>

    
  </dl>
</div>
        </div>
    );
};

export default DashBoardProfile;