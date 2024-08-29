import { useContext, useState } from "react";
import "./login.css"
import { AuthContext } from "../../Context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})

        try {
            const res = await axios.post(`${BACKEND_URL}/auth/login`, credentials)
            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
            navigate("/");
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE", payload: error.response.data})
        }
    }

    return ( 
        <>
            <div className="login" >
                <div className="lContainer">
                    <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput"/>
                    <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput"/>
                    <button className="lButton" disabled={loading} onClick={handleClick}>Login</button>

                    {error && <span>{error.message}</span>}

                </div>
            </div>
        </>
    );
}
 
export default Login;