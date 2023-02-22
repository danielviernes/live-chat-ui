import { useState } from "react";
import { validatePassword, validateUsername } from "../functions/validations";

const LoginForm = () => {

    const initialErrorState = {
        username: {
            errorMsg: ''
        },
        password: {
            errorMsg: ''
        }
    }

    const [errors, setErrors] = useState(initialErrorState);

    const loginUser = (event) => {
        event.preventDefault();
        setErrors(initialErrorState);

        const usernameError = validateUsername(event.target.username.value);
        const passwordError = validatePassword(event.target.password.value);

        if(usernameError.length > 0 || passwordError.length > 0) {
            setErrors({
                username: {
                    errorMsg: usernameError
                },
                password: {
                    errorMsg: passwordError
                }
            });

            return;
        }

        var user = {
            username: event.target.username.value,
            password: event.target.password.value
        };
    
        fetch(`${process.env.REACT_APP_WS_BASE_URL}/authenticate`, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(response => {
            if(!response.ok) {
                response.text().then(msg => {
                    setErrors({
                        ...errors,
                        username: 
                        {
                            errorMsg: msg
                        }
                    });
                })
                return;
            }
            return response.json();
        }).then(data => {
            if(data!=undefined) {
                localStorage.setItem("token", data.token)
                console.log(localStorage.getItem("token"))
            }
        });
    }

    return(
        <div className="login-section">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input type="text" id="username" name="username" min="5" placeholder="Username" required/>
                {errors.username.errorMsg.length > 0 ?  <span className="error-msg">{errors.username.errorMsg}</span> : null}
                <input type="password" id="password" name="password" min="5" placeholder="Password" required/>
                {errors.password.errorMsg.length > 0 ?  <span className="error-msg">{errors.password.errorMsg}</span> : null}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

}

export default LoginForm;