import React from "react"
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ params, request }) {
    await requireAuth(request)
    return getHostVans(params.id)
}

export default function HostVanDetail() {
    const currentVan = useLoaderData()

    // const activeStyles = {
    //     fontWeight: "bold",
    //     textDecoration: "underline",
    //     color: "#161616"
    // }



    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        backgroundColor: "#cee4ff",
        borderTopRightRadius: '5px',
        borderTopLeftRadius: "5px",
        transition: "all 0.3s ease"
    }
    const hostNavButton = {
        fontWeight: "normal",
        backgroundColor: "#EDF5FF",
        borderTopRightRadius: '5px',
        borderTopLeftRadius: "5px",
        transition: "all 0.3s ease",
    }
    const hostVanSetailsSection = {
        minHeight: '60vh',
        backgroundColor: '#cee4ff',
        paddingTop: '1.2rem',
        paddingBottom: "1.2rem",
        transition: "all 0.3s ease"
    }

    return (
        <section style={hostVanSetailsSection}>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : hostNavButton}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : hostNavButton}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : hostNavButton}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}
