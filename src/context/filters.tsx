import { useState, createContext } from 'react';
import {
	FiltersProviderProps,
	IFilterContext,
	IFilters,
} from '../interfaces/cart';

const DEFAULT_FILTERS: IFilters = {
	category: 'all',
	minPrice: 0,
};

export const FiltersContext = createContext<IFilterContext>({
	filters: DEFAULT_FILTERS,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setFilters: () => {},
});

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
	const [filters, setFilters] = useState(DEFAULT_FILTERS);
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};
