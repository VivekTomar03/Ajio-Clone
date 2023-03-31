import axios from "axios"
import { GETUSERLOGIN, GETUSERLOGINFAIL, GETUSERLOGINSUCCESS, POSTREQFAIL, POSTREQSUCESS, POSTUSERREQ } from "./actiontype"
export const getLoginReq = ({email, password}) =>(dispatch)=> {
     dispatch({type:GETUSERLOGIN})
return  axios.get(`https://embarrassed-fly-yoke.cyclic.app/users?email=${email}&password=${password}`)
    .then((res) => {
        // console.log(res.data[0], "action");
       return  dispatch({type:GETUSERLOGINSUCCESS , payload:res.data[0]})
    })
    .catch(() => dispatch({type:GETUSERLOGINFAIL}))
}
export const postReqUser = (data)=>(dispatch)=> {
    dispatch({type:POSTUSERREQ})
  return  axios.post(`https://embarrassed-fly-yoke.cyclic.app/users`, data)
    .then((res) => dispatch({type:POSTREQSUCESS}))
    .catch(() => dispatch({type:POSTREQFAIL}))
}
