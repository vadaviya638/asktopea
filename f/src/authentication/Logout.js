import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'


const Logout = () => {
	const {state, dispatch} = useContext(UserContext)
 
    const navigate=useNavigate()

    useEffect(()=>{
        fetch('/logout',{
         // method:"POST",
        headers:{
            Accept:"appllication/json",
            "Content-Type":"appllication/json"
          },
          credentials:"include"
        }).then((res)=>{
			dispatch({type:"USER", payload:true})

            navigate('/login')
            if(!res.status !==200){
                const error=new Error(res.error)
                throw error
              }
        }).catch((err)=>{
console.log(err);
        })
    })



  return (


    

    <div>
       
       </div>
  )
}

export default Logout