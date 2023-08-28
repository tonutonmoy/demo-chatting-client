import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react';
import { ContextProvider } from '../../Provider/Provider';
import { useParams } from 'react-router-dom';
import { useAdmin } from '../../CoustomHooks/useAdmin';
import { useUser } from '../../CoustomHooks/UseUser';





const DashboardSingleChat = () => {

    const { user} = useContext(ContextProvider);

    const {id}= useParams();
    const [singleUser,setSingleUser]=useState()


     useEffect(() => {

        fetch(`https://socet-io-server.vercel.app/singleUserData/${id}`)
            .then(res => res.json())
            .then(res => setSingleUser(res))
            .catch(error => console.log(error))

    }, [id])


    const [messages,adminRefetch]=useAdmin(id);

    const [,userRefetch]=useUser(singleUser?.userEmail);

   



    // const { refetch : adminRefetch , data: messages = [] } = useQuery({
    //     queryKey: ['userData',user?.email],
      
      
    
    //     queryFn: async () => {
    
    //       const res = await   fetch(`https://socet-io-server.vercel.app/singleUserData/${id}`)
    
    //       return res.json()
    //     },
    
       
    
        
    //   });
       
     


      const buttonHandler = (e) => {

        event.preventDefault();
       
    
         let filter= messages?.chat?.filter(a=> a) || []
    
    
         const text= e.target.name.value
    
         const chat =[...filter,
          {
          name: "Admin",
          email:user.email,
          text: text
        }
      ]
    
    
        // console.log(filter)
    
     
        // socket.emit('join_room', chat,user?.email,text)
    
    
    
        fetch(`https://socet-io-server.vercel.app/postChat?email=${messages?.userEmail}`, {
    
    
        method: "POST",
    
        headers: {
    
          'content-type': "application/json"
        },
    
    
        body: JSON.stringify(chat)
    
    
      })
      .then(res=> res.json())
      .then((res)=>{
    
        if(res?.modifiedCount>0){
    
    
          
        e.target.reset()

        adminRefetch()

        userRefetch()

        
        
      
        
     
    
      }
    
      })
    
    
    
    
      }


      useEffect(() => {
        const refetchInterval = setInterval(()=> {
          userRefetch()
          adminRefetch()
        }, 3000); // Check every 5 seconds
    
        return () => {
          clearInterval(refetchInterval);
        };
      }, []);




    console.log(singleUser?.userEmail)
    
    return (
        <div className="w-[90%] mx-auto border m-auto bg-red-100 pb-[300px] relative p-20 mt-[50px]">
        <div className="message-container">
  
          { messages && messages?.chat?.map((message, index) => (
            <div
              key={index}
              className={`message text-[20px] font-[500] mb-10  ${message?.name ? 'user' : 'bot'}`}
            >
                <span className='text-[15px] '>{message?.name}: </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={buttonHandler} className="input-container w-[100%] flex absolute left-0  bottom-0 m-0 p-0 ">
          <input
  
  
            type="text"
            placeholder="Type your message..."
            name='name'
  
            className="flex-grow p-2 rounded-l-md border w-[90%] bg-black text-white h-[100px] "
            required
          />
          <button
  
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          >Send</button>
  
  
        </form>
  
       
      </div>
    );
};

export default DashboardSingleChat;