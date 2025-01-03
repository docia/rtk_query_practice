import { createContext, useContext, useState } from "react";

interface CounterContextType {
	count: number;
	increment: () => void;
	decrement: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounter = (): CounterContextType => {
	const context = useContext(CounterContext);
	if (!context) {
		throw new Error("useCounter must be used within a CounterProvider");
	}
	return context;
};

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);

	return (
		<CounterContext.Provider value={{ count, increment, decrement }}>
			{children}
		</CounterContext.Provider>
	);
};
