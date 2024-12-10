import { currencyFormatter } from "../../util/formatting"

export default function CartItem({item, onIncrease, onDecrease}) {
    return (
        <li className="cart-item">
            <p>
                {item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <button>{item.quantity}</button>
                <button onClick={onIncrease}>+</button>
            </p>

        </li>
        )
}