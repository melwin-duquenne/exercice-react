
import { useState, useContext } from 'react';
import { loginUser } from '../services/tasksService';
import { AuthContext } from '../context/AuthContext';
function Login() {
	const [email, setEmail] = useState('student@example.com');
	const [password, setPassword] = useState('password');
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const auth = useContext(AuthContext);


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setSuccess(null);
		if (!email || !password) {
			setError('Veuillez remplir tous les champs.');
			return;
		}
		try {
			const token = await loginUser(email, password);
			auth?.login(token);
			setSuccess('Connexion réussie !');
			console.log('Token enregistré:', token);
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message || 'Erreur de connexion');
			} else {
				setError('Erreur de connexion');
			}
		}
	};

	return (
		<div style={{ maxWidth: 400, margin: '3rem auto', padding: '2rem', borderRadius: 12, boxShadow: '0 2px 12px #0002', background: '#fff' }}>
			<h2 style={{ textAlign: 'center', marginBottom: 24 }}>Connexion</h2>
			<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
				<label style={{ fontWeight: 500 }}>
					Email
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						style={{ width: '100%', padding: '0.7em', marginTop: 6, borderRadius: 6, border: '1px solid #ccc' }}
						required
					/>
				</label>
				<label style={{ fontWeight: 500 }}>
					Mot de passe
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						style={{ width: '100%', padding: '0.7em', marginTop: 6, borderRadius: 6, border: '1px solid #ccc' }}
						required
					/>
				</label>
				{error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
				{success && <p style={{ color: 'green', margin: 0 }}>{success}</p>}
				<button type="submit" className='btnAccueil'>
					Se connecter
				</button>
			</form>
            <div>
                <p>Email : student@example.com </p>
                <p>Mot de passe : password </p>
            </div>
		</div>
	);
}

export default Login;
