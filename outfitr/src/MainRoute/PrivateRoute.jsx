import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom"
export const PrivateRoute = ({children})=> {
    let {isLogin } = useSelector((state) => state.authReducer)
     return  isLogin ? children : <Navigate to="/"/>
}