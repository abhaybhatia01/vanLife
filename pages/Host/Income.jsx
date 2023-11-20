import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Income = () => {
    const [userGuess, setUserGuess] = useState('');
    const [showJoke, setShowJoke] = useState(false);

    const handleInputChange = (event) => {
        setUserGuess(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowJoke(true);
    };

    const getJoke = () => {
        const jokes = {
            highIncome: "Wow, you think I make that much? I wish! Here's a joke: Why don't scientists trust atoms? Because they make up everything!",
            lowIncome: "Guess what? You're right! I'm broke. Here's a joke: Why did the scarecrow win an award? Because he was outstanding in his field!",
        };

        const income = parseInt(userGuess, 10);

        if (income > 100000) {
            return jokes.highIncome;
        } else {
            return jokes.lowIncome;
        }
    };

    const renderJoke = () => {
        if (showJoke) {
            return (
                <div style={styles.jokeContainer}>
                    <p style={styles.jokeTitle}>Humorous Insight:</p>
                    <p style={styles.joke}>{getJoke()}</p>
                    <button onClick={() => setShowJoke(false)} style={styles.resetButton}>
                        Try Another Guess
                    </button>
                </div>
            );
        }
        return null;
    };

    return (

        <div style={styles.container}>
            <NavLink
                to="/host/vans"
                style={styles.myVans}
            >
                This is a dummy page, Click to See my vans. that illustrates nested routing using react router.🤗
            </NavLink>
            <div style={styles.card}>
                <form onSubmit={handleSubmit}>
                    <label style={styles.label}>
                        Take a wild guess at my income:
                        <input
                            type="number"
                            value={userGuess}
                            onChange={handleInputChange}
                            style={styles.input}
                        />
                    </label>
                    <button type="submit" style={styles.button}>
                        Submit Guess
                    </button>
                </form>
            </div>
            {renderJoke()}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        backgroundColor: '#cee4ff'
    },
    myVans: {
        maxWidth: "300px",
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        boxShadow: "7px 7px 10px 1px black"
    },
    card: {
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '20px',
        textAlign: 'center',
    },
    label: {
        fontSize: '1rem',
        marginBottom: '10px',
        display: 'block',
    },
    input: {
        padding: '8px',
        fontSize: '1rem',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '15px',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
    },
    jokeContainer: {
        maxWidth: '400px',
        padding: '1rem'
    },
    jokeTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    joke: {
        fontSize: 'medium',
        marginBottom: '10px',
    },
    resetButton: {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: 'small',
        margin: 'auto'
    },
};

export default Income;
