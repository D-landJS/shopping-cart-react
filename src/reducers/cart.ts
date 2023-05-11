import { CartAction, CartState } from '../interfaces/cart';

export const CART_ACTION_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART',
};

export const cartInitialState: CartState = JSON.parse(
	localStorage.getItem('cart') || '[]'
);

export const updateLocalStorage = (state: CartState) => {
	localStorage.setItem('cart', JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
	[CART_ACTION_TYPES.ADD_TO_CART]: (state: CartState, action: CartAction) => {
		const { id } = action.payload;
		const productInCartIndex = state.findIndex(item => item.id === id);

		if (productInCartIndex >= 0) {
			// const newState = structuredClone(state);
			// newState[productInCartIndex].quantity += 1;
			// return newState;

			const newState = state.map(item => {
				if (item.id === id) {
					return {
						...item,
						quantity: item.quantity + 1,
					};
				}
				return item;
			});
			updateLocalStorage(newState);
			return newState;
			// const newState = [
			// 	...state.slice(0, productInCartIndex),
			// 	{
			// 		...state[productInCartIndex],
			// 		quantity: state[productInCartIndex].quantity + 1,
			// 	},
			// 	...state.slice(productInCartIndex + 1),
			// ];
			// return newState;
		}
		const newState = [
			...state,
			{
				...action.payload,
				quantity: 1,
			},
		];

		updateLocalStorage(newState);
		return newState;
	},
	[CART_ACTION_TYPES.REMOVE_FROM_CART]: (
		state: CartState,
		action: CartAction
	) => {
		const { id } = action.payload;
		const newState = state.filter(item => item.id !== id);
		updateLocalStorage(newState);
		return newState;
	},
	[CART_ACTION_TYPES.CLEAR_CART]: () => {
		updateLocalStorage([]);
		return [];
	},
};

export const cartReducer = (state: CartState, action: CartAction) => {
	const { type: actionType } = action;
	const updateState = UPDATE_STATE_BY_ACTION[actionType];
	return updateState ? updateState(state, action) : state;
};
