export interface IProduct {
	id: number;
	thumbnail?: string;
	title?: string;
	price?: number;
	category?: string;
}
export interface ICart {
	id: number;
	thumbnail?: string;
	title?: string;
	price?: number;
	category?: string;
}

export interface ProductProps {
	products: IProduct[];
}

export interface ICartItem extends ICart {
	quantity: number;
	addToCart?: () => void;
}

export interface ICartContext {
	cart: ICartItem[];
	addToCart: (product: IProduct) => void;
	removeFromCart: (product: IProduct) => void;
	clearCart: () => void;
}

export interface ICartProviderProps {
	children: React.ReactNode;
}

export interface IFilterContext {
	filters: IFilters;
	setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}
export interface IFilters {
	category: string;
	minPrice: number;
}

export interface FiltersProviderProps {
	children: React.ReactNode;
}

export type CartState = ICartItem[];

export interface CartAction {
	type: string;
	payload: {
		id: number;
	};
}
