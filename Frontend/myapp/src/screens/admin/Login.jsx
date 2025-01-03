
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import {
    Snackbar,
    Alert
} from "@mui/material";

export const Login = () => {

    const [error, setError] = useState("")
    const [toastOpen, setToastOpen] = useState(false);
    const navigate = useNavigate();

    const handleToastClose = () => {
        setToastOpen(false);
    };

    const logIn = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData.entries());

        try {

            const response = await axios.post("http://localhost:7777/admin/login", userData, { withCredentials: true });
            if (response.status === 200) {
                const { token } = response.data; // Assuming the backend sends { token: "JWT_TOKEN" }

                // Store the JWT in a cookie
                Cookies.set("jwt", token);
            }
            navigate("/admin/dashboard");
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || "Signin failed. Please try again.");
            setToastOpen(true);
        }
    }


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Admin Login</h2>
                <form onSubmit={logIn} method="post">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
            {/* Snackbar */}
            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={handleToastClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert onClose={handleToastClose} severity="error" sx={{ width: "100%" }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};