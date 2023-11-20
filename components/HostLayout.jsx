import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        backgroundColor: "#cee4ff",
        borderTopRightRadius: '10px',
        borderTopLeftRadius: "10px",

        transition: "all 0.3s ease",

    }
    const hostNavButton = {
        fontWeight: "normal",


        backgroundColor: "#EDF5FF",
        borderTopRightRadius: '10px',
        borderTopLeftRadius: "10px",
        transition: "all 0.3s ease",
        marginInline: "0.3rem"

    }


    return (
        <>
            <div className="host-nav-wrapper">
                <nav className="host-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : hostNavButton}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="vans"
                        style={({ isActive }) => isActive ? activeStyles : hostNavButton}
                    >
                        Vans
                    </NavLink>

                    <NavLink
                        to="income"
                        style={({ isActive }) => isActive ? activeStyles : hostNavButton}
                    >
                        Income
                    </NavLink>

                    <NavLink
                        to="reviews"
                        style={({ isActive }) => isActive ? activeStyles : hostNavButton}
                    >
                        Reviews
                    </NavLink>

                </nav>
            </div>
            <Outlet />
        </>
    )
}