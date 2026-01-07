import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetUserMiddleware from "../redux/User/middleware";


export default function UserRedux(){
   
    const {error, loading, user} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetUserMiddleware());
    },[])

    if(error){
        return <h2>..Ops Something went wrong</h2>
    }
    if(loading){
        return <h1>Wait loading</h1>
    }

    return(
        <>
        <h1>User components</h1>
        <h2>Name : {user.name}</h2>
        <h2>phone: {user.phone}</h2>
        </>
    )
}