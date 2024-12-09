import { useContext } from "react"
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";


export default function Cart() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalCost, item) => totalCost + item.quantity * item.price  ,0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    return (
        <Modal open={userProgressCtx.progress === 'cart'} className= 'cart'>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => <li key={item.id}> {item.name} - {item.quantity} </li>)}
            </ul>
            <p className="cart-total"> {currencyFormatter.format(cartTotal)} </p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart} textOnly> Close  </Button>
                <Button> Go to Checkout </Button>
            </p>
        </Modal>
    )

}