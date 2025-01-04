import { useCounter } from "./CounterContext";

const CounterControls = () => {
	const { increment, decrement } = useCounter();

	return (
		<div>
			<button
				onClick={decrement}
				style={{
					color: "blue",
					background: "yellow",
					fontSize: "24px",
				}}
			>
				Decrement
			</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default CounterControls;
