import { useReducer } from 'react';

import {
	cartReducer,
	cartInitialState,
	CART_ACTION_TYPES,
} from '../reducers/cart';
import { IProduct } from '../interfaces/cart';

export const useCartReducer = () => {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState);

	const addToCart = (product: IProduct) => {
		dispatch({
			type: CART_ACTION_TYPES.ADD_TO_CART,
			payload: product,
		});
	};

	const removeFromCart = (product: IProduct) =>
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: product,
		});
	const clearCart = () =>
		dispatch({
			type: 'CLEAR_CART',
			payload: { id: 0 },
		});

	return { state, addToCart, removeFromCart, clearCart };
};
