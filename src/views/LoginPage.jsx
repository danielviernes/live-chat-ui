import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("user") !== null) { //if user is logged in
            console.log("User already logged in");
            navigate("/", {replace: true});
        }
    }, [navigate]);

    return(
        <>
        { !localStorage.getItem("user") ?
            <>
                <LoginForm />
                <RegistrationForm />
            </> 
            :
            null
        }
        </>
    );
}

export default LoginPage;