import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect } from 'react';




import { ContextProvider } from '../../Provider/Provider';
import { useAdmin } from '../../CoustomHooks/useAdmin';
import { useUser } from '../../CoustomHooks/UseUser';







const Chatting = () => {

  


  const { user } = useContext(ContextProvider);

  
  const [messages,userRefetch]=useUser(user?.email)



  const [,adminRefetch]=useAdmin(messages?._id);
 

 
  
 


   
 
  
  

 



  const buttonHandler = (e) => {

    event.preventDefault();
   

     let filter= messages?.chat?.filter(a=> a) || []


     const text= e.target.name.value

     const chat =[...filter,
      {
      name: user?.displayName,
      email:user.email,
      text: text
    }
  ]


  



    fetch(`https://socet-io-server.vercel.app/postChat?email=${user?.email}`, {


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
    
    userRefetch()

    adminRefetch()

    

    
 

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




  return (
    <div className="w-[70%] mx-auto border m-auto bg-gray-900 pb-[200px] relative p-20 my-[50px] ">
      <div className="message-container">

        { messages?.chat?.map((message, index) => (
          <div
            key={index}
            className={`message text-[20px] font-[500] mt-5  ` }

           
          >
             <div className='p-[50px] rounded-[20px] text-white bg-blue-500 w-full'  style={{boxShadow:'10px m10px 10px black,'}}>
             <span className='text-[15px] '>{message?.name}: </span>
              <span className='ml-5'>{message.text}</span>
             </div>


          </div>
        ))}
      </div>
      <form onSubmit={buttonHandler} className="input-container w-[100%] flex absolute left-0  bg-fixed bottom-0 m-0 p-0 ">
        <input 
       id='input'


          type="text"
          placeholder="Type your message..."
          name='name'

          className="flex-grow p-2 rounded-l-md border w-[90%] bg-gray-500 text-white h-[100px] "
          required
        />
        <button

          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >Send</button>


      </form>

     
    </div>
  );
};

export default Chatting;