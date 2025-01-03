import { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import GoBack from "../../components/GoBack";

const Counter = () => {
	return (
		<CounterProvider>
			<div className="container">
				<GoBack />
				<div style={{ textAlign: "center", marginTop: "50px" }}>
					<h1>Counter Page</h1>
					<CounterDisplay />
					<CounterControls />
				</div>
			</div>
		</CounterProvider>
	);
};

export default Counter;
