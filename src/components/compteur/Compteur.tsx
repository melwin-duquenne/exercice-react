import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../features/CounterSlice';
import type { RootState } from '../../store/store';


function Compteur() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div style={{ marginBottom: '50px' }}>
			<h2>Compteur : {count}</h2>
			<button onClick={() => dispatch(increment())}>+1</button>
			<button onClick={() => dispatch(decrement())}>-1</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
}

export default Compteur;
