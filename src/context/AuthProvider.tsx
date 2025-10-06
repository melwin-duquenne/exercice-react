
import { useState, useEffect } from "react";
import { AuthContext } from "./context";

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) setToken(storedToken);
	}, []);

	const login = (newToken: string) => {
		setToken(newToken);
		localStorage.setItem('token', newToken);
	};

	const logout = () => {
		setToken(null);
		localStorage.removeItem('token');
	};

	return (
		<AuthContext.Provider value={{ token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
