import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './nav.css';
import { AuthContext } from '../../context/AuthContext';
function Applayout() {
    const navigate = useNavigate();
    const [path, setPath] = React.useState("");
    const auth = useContext(AuthContext);
    const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (path) navigate(path);
    };
    const handleLogout = () => {
        auth?.logout();
        navigate('/');
    };
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/exo1">Exo 1</Link>
                <Link to="/exo2">Exo 2</Link>
                {auth?.token ? (
                    <button onClick={handleLogout} style={{ marginLeft: 12, padding: '0.5em 1em', borderRadius: 6, background: '#ff6b6b', border: 'none', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                        Déconnexion
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
            <form onSubmit={handleInput}>
                <input
                    type="text"
                    value={path}
                    onChange={e => setPath(e.target.value)}
                    placeholder="Chemin de la page (ex: /exo1)"
                    style={{ padding: '0.5em', borderRadius: 6, border: '1px solid #ccc', marginRight: 8 }}
                />
                <button type="submit" style={{ padding: '0.5em 1em', borderRadius: 6, background: '#61dafb', border: 'none', color: '#222', fontWeight: 600 }}>
                    Aller
                </button>
            </form>
        </header>
    );
}
export default Applayout;
