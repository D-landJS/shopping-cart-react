import { createContext } from 'react';
import { ICartContext, ICartProviderProps } from '../interfaces/cart';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext<ICartContext>({
	cart: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	addToCart: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	clearCart: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	removeFromCart: () => {},
});

export const CartProvider = ({ children }: ICartProviderProps) => {
	const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
	return (
		<CartContext.Provider
			value={{ cart: state, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
