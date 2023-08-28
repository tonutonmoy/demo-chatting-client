import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const DashBoardAllChats = () => {

    const [allData, setAllData] = useState([]);

  



    // const { refetch, data: allData = [] } = useQuery({
    //     queryKey: ['allUserData',],



    //     queryFn: async () => {

    //       const res = await fetch(`https://socet-io-server.vercel.app/allUserData`)

    //       return res.json()
    //     },




    //   })

    useEffect(() => {

        fetch(`https://socet-io-server.vercel.app/allUserData`)
            .then(res => res.json())
            .then(res => setAllData(res))
            .catch(error => console.log(error))

    }, [])


    const allChats = allData?.filter(a => a?.roll === 'user')

    console.log(allChats)





    return (
        <div className=" p-[20px]">

            {allChats?.map((a) => <div key={a?._id} className=" bg-red-300 my-10 p-[20px] space-y-5 rounded-[30px]" >
                <p className=" text-[20px] font-[400]">Name: {a?.userName}</p>


                {a?.roll === 'admin' ? <p className=" text-[15px] font-[500]" >Your replay:

                    {a?.chat[a?.chat.length - 1]?.text}
                </p>

                    : <p className=" text-[15px] font-[700]" > New text: 

                        {a?.chat[a?.chat.length - 1]?.text}
                    </p>



                }

                {/* <div className=" py-5 text-center">
                <button onClick={()=>singleMessageHandler(a?.userEmail)} className="p-[10px] bg-black text-white"> view message</button >
                </div> */}

                <Link to={`singleChat/${a?._id}`}>view </Link>

               
            </div>)}

        </div>
    );
};

export default DashBoardAllChats;