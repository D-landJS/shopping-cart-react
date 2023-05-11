import './Cart.css';
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from '../Icon';
import { useCart } from '../../hooks/useCart';
import { ICartItem } from '../../interfaces/cart';

const CartItem = ({
	thumbnail,
	price,
	title,
	quantity,
	addToCart,
}: ICartItem) => (
	<li>
		<img src={thumbnail} alt={title} />
		<div>
			<strong>{title}</strong> - ${price}
		</div>

		<footer>
			<small>Qty: {quantity}</small>
			<button onClick={addToCart}>+</button>
		</footer>
	</li>
);

const Cart = () => {
	const cartCheckboxId = useId();
	const { cart, clearCart, addToCart } = useCart();
	return (
		<>
			<label className="cart-button" htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>
			<input id={cartCheckboxId} type="checkbox" hidden />

			<aside className="cart">
				<div className="wrapper">
					<ul>
						{cart.map(product => (
							<CartItem
								key={product.id}
								{...product}
								addToCart={() => addToCart({ ...product })}
							/>
						))}
					</ul>

					<button onClick={clearCart} className="clear-cart">
						<ClearCartIcon />
					</button>
				</div>
			</aside>
		</>
	);
};

export default Cart;
