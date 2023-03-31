import axios from "axios"

export const getuserData = ()=> {
  return  axios.get("https://artistic-butternut-blossom.glitch.me/users")
    
}
export const getmensData = ()=> {
    return  axios.get("https://artistic-butternut-blossom.glitch.me/mens")
      
  }
  export const getWomensData = ()=> {
    return  axios.get("https://artistic-butternut-blossom.glitch.me/women")
      
  }
  export const getData = (e)=> {
    return  axios.get(`https://embarrassed-fly-yoke.cyclic.app/${e}`)
      
  }