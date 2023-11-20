import React from "react"
import { useState } from "react"
import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect(pathname)
    } catch (err) {
        return err.message
    }
}
export default function Login() {
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()
    const [login, setLogin] = useState(localStorage.getItem("loggedin") ? "in" : "out")

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setLogin("out")
    }
    const logoutButton = {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {
                localStorage.getItem("loggedin") ?
                    <button style={logoutButton} onClick={fakeLogOut}>Log Out </button> :
                    <div className="hint-container">
                        <p>hint: </p>
                        <p>email: admin@gmail.com</p>
                        <p>password: admin123</p>
                    </div>
            }
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form
                method="post"
                className="login-form"
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="true"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="true"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}
