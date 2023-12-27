import { ReactNode, createContext, useContext, useMemo } from 'react';
import myDetails from '../assets/data/myDetails';
import projectDetails from '../assets/data/projectDetails';

export const DetailsContext = createContext<{
	myDetails: typeof myDetails;
	projectDetails: typeof projectDetails;
} | null>(null);

interface DetailsContextProviderProps {
	children: ReactNode;
}

export default function DetailsContextProvider({
	children,
}: DetailsContextProviderProps) {
	const detailsProviderValue = useMemo(
		() => ({ myDetails, projectDetails }),
		[myDetails, projectDetails]
	);

	return (
		<DetailsContext.Provider value={detailsProviderValue}>
			{children}
		</DetailsContext.Provider>
	);
}

export function useDetailsContext(): {
	myDetails: typeof myDetails;
	projectDetails: typeof projectDetails;
} {
	const context = useContext(DetailsContext);

	if (!context) {
		throw new Error(
			'useDetailsContext must be used within a DetailsContextProvider'
		);
	}
	return context;
}
