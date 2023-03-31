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