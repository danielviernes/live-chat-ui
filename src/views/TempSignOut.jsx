import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const TempSignOut = () => {

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("user");
        localStorage.clear();
        navigate("/login", {replace: true});
    }, [navigate]);

    return(<></>);
}

export default TempSignOut;