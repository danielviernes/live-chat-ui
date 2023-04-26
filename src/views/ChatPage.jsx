import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chatbox from "../components/fragments/Chatbox";

const ChatPage = () => {

    const navigate = useNavigate();
    var user = {
        username: ''
    }

    useEffect(() => {
        user = JSON.parse(localStorage.getItem("user"));
        if(localStorage.getItem("user") === null) {
            console.log("Unauthorized");
            navigate("/login", {replace: true});
        } 

    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login", {replace: true});
    }

    return(
        <>
        { localStorage.getItem("user") ?
            <div>
                Welcome {JSON.parse(localStorage.getItem("user")).username}! This is the chatbox page.
                <button onClick={handleSignOut}>Sign Out</button>
                <Chatbox />
            </div>
            : 
            null
        }
        </>
    );
}

export default ChatPage;