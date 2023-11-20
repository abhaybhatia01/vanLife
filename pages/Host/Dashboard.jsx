// import React from "react"

// export default function Dashboard() {
//     return (
//         <h1>Dashboard goes here</h1>
//     )
// }

import { Link, NavLink } from 'react-router-dom';
import React from 'react';

const Dashboard = () => {
    const adminDetails = {
        name: 'Abhay Bhatia',
        role: 'Administrator',
        email: 'admin@gmail.com',
        bio: 'Experienced administrator with a passion for managing systems and ensuring smooth operations.',
    };

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Admin Showcase</h1>
            <div style={styles.card}>
                <h2 style={styles.subtitle}>{adminDetails.name}</h2>
                <p style={styles.text}>{adminDetails.role}</p>
                <p style={styles.text}>{adminDetails.email}</p>
                <p style={styles.bio}>{adminDetails.bio}</p>

                <NavLink
                    to="vans"
                    style={styles.button}
                >
                    See my vans
                </NavLink>

            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '60vh',
        backgroundColor: '#cee4ff'
    },
    card: {
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '20px',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '1rem',
        marginBottom: '5px',
    },
    text: {
        fontSize: '0.8rem',
        marginBottom: '5px',
    },
    bio: {
        fontSize: '0.8rem',
        marginTop: '10px',
    },
    button: {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '15px',
        transition: 'background-color 0.3s ease',
        marginInline: "5px"
    },

    buttonHover: {
        backgroundColor: '#fff',
    },
};
export default Dashboard;
