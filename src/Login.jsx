import { Button } from "@mui/material";
import "./Login.css"
import {auth , provider} from './firebase'
import { useNavigate } from "react-router-dom";
// import { actionTypes } from "./reducer";
// import { useStateValue } from "./StateProvider";

function Login () {
    // const [state , dispatch] = useStateValue();
    
    const navigate = useNavigate();
    const signIn = () =>{
       auth
       .signInWithPopup(provider)
     .then(result => {
        navigate('home');
    })
    .catch((error) => alert(error.message));
    // {
    //     dispatch({
    //         type: actionTypes.SET_USER,
    //         user :result.user,
    //     })
    //    })
       

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png?20190503112358" alt="" />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
            </div>
            <Button type = "submit" onClick= {signIn}>
                Sign In
            </Button>  

        </div>
    )
}
export default Login;