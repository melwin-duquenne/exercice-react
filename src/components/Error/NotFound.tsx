import { Link } from 'react-router-dom';
import './404.css'

export default function NotFound() {
	return (
		<div className='notfound'>
			<img src='/img/hand-drawn-404-error.png' alt='404 Not Found'></img>
			<Link className='link' to="/">Retour à l'accueil</Link>
		</div>
	);
}
