import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserFromLocalStorage } from "../../Store/authSlice";


function AutoLogin(props){
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(setUserFromLocalStorage())},[dispatch]);
    return props.children
}

export default AutoLogin;