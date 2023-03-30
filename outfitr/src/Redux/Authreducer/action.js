import axios from "axios"
import { GETUSERLOGIN, GETUSERLOGINFAIL, GETUSERLOGINSUCCESS } from "./actiontype"
export const getLoginReq = (email, password) =>(dispatch)=> {
     dispatch({type:GETUSERLOGIN})
   axios.get(`https://embarrassed-fly-yoke.cyclic.app/users?email=${email}&password=${password}`)
    .then((res) => {
        console.log(res.data[0], "action");
        dispatch({type:GETUSERLOGINSUCCESS , payload:res.data[0]})
    })
    .catch(() => dispatch({type:GETUSERLOGINFAIL}))
}
// export const postReqUser