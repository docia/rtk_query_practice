import { useCounter } from "./CounterContext";

const CounterDisplay = () => {
	const { count } = useCounter();

	return (
		<div>
			<h2>Current Count: {count}</h2>
		</div>
	);
};

export default CounterDisplay;
