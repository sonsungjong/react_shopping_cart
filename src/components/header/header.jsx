import { Link } from "react-router-dom";
import './header.css';

export default function Header()
{
    return(
        <>
            {/* flex items-center justify-between h-20 max-w-6xl mx-auto */}
            <nav className="nav-container">
                <Link to={'/'}>
                    {/* ml-5 */}
                    <div className="margin-left">
                        {/* text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide */}
                        <h1 className="nav-title">
                            REACT REDUX SHOPPING CART
                        </h1>
                    </div>
                </Link>
                {/* flex items-center space-x-6 text-gray-800 font-semibold */}
                <ul className="nav-ul">
                    <Link to={'/'}>
                        <li className="nav-li">Home</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className="nav-li">Cart</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}
