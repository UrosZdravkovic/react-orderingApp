import logo from '../assets/logo.jpg'

export default function Header() {
    return (
        <div id="main-header">
            <div id="title">
                <img src={logo} alt="" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <button id='title-img'> Cart (0) </button>
            </nav>
            
        </div>
    )
}