import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            return alert("Please fill all fields");
        }

        try {

            const res = await axios.post(
                "http://localhost:5000/login",
                {
                    email,
                    password
                }
            );

            alert(res.data.message);

            navigate("/home"); 

        } catch (error) {

            alert(error.response.data.message);

        }

    };

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f4f4f4"
            }}
        >

            <form
                onSubmit={handleLogin}
                style={{
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    width: "300px"
                }}
            >

                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "20px"
                    }}
                >
                    Login Form
                </h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px"
                    }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px"
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;