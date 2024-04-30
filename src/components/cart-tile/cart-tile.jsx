import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice";
import './cart-tile.css';

export default function CartTile({cartItem})
{
    const dispatch = useDispatch();
    function hRemoveFromCart(){
        dispatch(removeFromCart(cartItem.id));
    }

    return(
        <>
        {/* flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl */}
            <div className="tile-container">
                {/* flex p-3 */}
                <div className="flex-padding">
                    {/* h-28 rounded-lg */}
                    <img src={cartItem?.image} className="rounded-box" alt={cartItem?.title}/>
                    {/* ml-10 self-start space-y-5 */}
                    <div className="margin-left-self-start-space-y">
                        {/* text-xl text-white font-bold */}
                        <h1 className="bold-large-white-text">
                            {cartItem?.tile}
                        </h1>
                        {/* text-white font-extrabold */}
                        <p className="white-text-bold-800">
                            {Math.floor(cartItem?.price * 1400).toLocaleString('ko-KR')} 원
                        </p>
                    </div>
                </div>
                <div>
                    {/* bg-red-950 text-white border-2 rounded-lg font-bold p-4 */}
                    <button onClick={hRemoveFromCart} className="bold-red-button">
                        제거
                    </button>
                </div>
            </div>
        </>
    )
}