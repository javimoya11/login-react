import { useState } from "react";

const Login = () => {
    const [requestParams, setRequestParams] = useState({
        email: "",
        password: "",
      });
    return (
        <div className="standard-container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        email: formData.get("email") ?? "",
                        password: formData.get("password") ?? ""
                    };
                    setRequestParams(obj);
                }}
            >
                <label htmlFor="email">
                    Email
                    <input id="email" name="email" placeholder="email" />
                </label>

                <label htmlFor="password">
                    Password
                    <input id="password" name="password" placeholder="password" />
                </label>

                <button>Submit</button>
            </form>
            <div>
                {requestParams.email} {requestParams.password}
            </div>
        </div>
    );
};

export default Login;