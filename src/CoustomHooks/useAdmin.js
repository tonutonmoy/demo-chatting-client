import { useQuery } from "@tanstack/react-query";



 export const useAdmin=(id)=>{

    

  


    const { refetch : adminRefetch , data: messages = [] } = useQuery({
        queryKey: ['singleUserData',id],
      
      
    
        queryFn: async () => {
    
          const res = await   fetch(`https://socet-io-server.vercel.app/singleUserData/${id}`)
    
          return res.json()
        },
    
       
    
        
      });


      return [messages,adminRefetch]

}