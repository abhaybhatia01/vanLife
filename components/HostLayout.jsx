import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <div className="host-nav-wrapper">
                <nav className="host-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="vans"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Vans
                    </NavLink>

                    <NavLink
                        to="income"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Income
                    </NavLink>

                    <NavLink
                        to="reviews"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Reviews
                    </NavLink>

                </nav>
            </div>
            <Outlet />
        </>
    )
}