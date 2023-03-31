import axios from "axios"

export const getuserData = ()=> {
  return  axios.get("https://embarrassed-fly-yoke.cyclic.app/users")
    
}
export const getmensData = ()=> {
    return  axios.get("https://embarrassed-fly-yoke.cyclic.app/mens")
      
  }
  export const getWomensData = ()=> {
    return  axios.get("https://embarrassed-fly-yoke.cyclic.app/women")
      
  }
  export const getData = (e)=> {
    return  axios.get(`https://embarrassed-fly-yoke.cyclic.app/${e}`)
      
  }