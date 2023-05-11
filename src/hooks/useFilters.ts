import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

interface IProduct {
	id: number;
	thumbnail: string;
	title: string;
	price: number;
	category: string;
}

export const useFilters = () => {
	const { filters, setFilters } = useContext(FiltersContext);

	const filterProducts = (products: IProduct[]) => {
		return products.filter((product: IProduct) => {
			return (
				product.price >= filters.minPrice &&
				(filters?.category === 'all' || product.category === filters?.category)
			);
		});
	};

	return { filterProducts, filters, setFilters };
};
