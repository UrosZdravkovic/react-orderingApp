import Button from './UI/Button'
import logo from '../assets/logo.jpg'
import { useContext } from 'react'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext';



export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgress = useContext(UserProgressContext);

    function handleShowCart() {
        userProgress.showCart();
    }

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0)

    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt="A restaurant" />
                <h1>ReactFood</h1>
            </div>          
            <nav>
                <Button onClick={handleShowCart} textOnly> Cart ({totalCartItems})</Button>
            </nav>  
        </header>
    )
}