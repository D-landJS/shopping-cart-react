import { useFilters } from '../../hooks/useFilters';
import './Filters.css';
import { useId } from 'react';

const Filter = () => {
	const { filters, setFilters } = useFilters();
	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilters(prevState => ({
			...prevState,
			minPrice: parseInt(e.target.value),
		}));
	};

	const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilters(prevState => ({
			...prevState,
			category: e.target.value,
		}));
	};

	return (
		<section className="filters">
			<div>
				<label htmlFor="price">Precio a partir de:</label>
				<input
					type="range"
					id={minPriceFilterId}
					min="0"
					max="1000"
					onChange={handleChangeMinPrice}
					value={filters.minPrice}
				/>
				<span>${filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor="Category">Categoria</label>
				<select
					id={categoryFilterId}
					onChange={handleChangeCategory}
					value={filters.category}
				>
					<option value="all">Todas</option>
					<option value="laptops">Portátiles</option>
					<option value="smartphones">Celulares</option>
				</select>
			</div>
		</section>
	);
};

export default Filter;
