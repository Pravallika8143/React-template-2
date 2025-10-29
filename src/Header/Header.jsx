import './Header.css'

function Header(){
    return (
        <div className="header">
        <h1 style={{marginLeft:"10%"}}>Landy</h1>
        <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Product</li>
            <li>Contact</li>
        </ul>
        </div>
    )
}

export default Header