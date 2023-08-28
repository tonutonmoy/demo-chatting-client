import { useQuery } from "@tanstack/react-query"




export const useUser=(email)=>{




    const { refetch : userRefetch, data: messages = [] } = useQuery({
        queryKey: ['userData',email],
      
      
    
        queryFn: async () => {
    
          const res = await fetch(`https://socet-io-server.vercel.app/userData?email=${email}`)
    
          return res.json()
        },
    
       
  
        
      })

      
    

      return [messages,userRefetch]


}