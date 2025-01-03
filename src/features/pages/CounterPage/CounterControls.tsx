import { useCounter } from "./CounterContext";

const CounterControls = () => {
	const { increment, decrement } = useCounter();

	return (
		<div>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default CounterControls;
