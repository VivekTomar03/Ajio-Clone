import { GETUSERLOGIN, GETUSERLOGINFAIL, GETUSERLOGINSUCCESS, POSTREQFAIL, POSTREQSUCESS, POSTUSERREQ } from "./actiontype"



const initstate = {
    isLoading:false,
    isError:false,
    userData:[]
}

export const  reducer = (state=initstate, {type,payload}) => {
   switch(type){
    case GETUSERLOGIN : return {...state , isLoading:true}
    case GETUSERLOGINSUCCESS: return {...state , isLoading:false, userData:payload}
    case GETUSERLOGINFAIL : return {...state , isLoading:false , isError:true}
    case POSTUSERREQ : return {...state , isLoading:true}
    case POSTREQSUCESS : return {...state , isLoading:false}
    case POSTREQFAIL :  return {...state , isLoading:false}
    default: return state
   }
}