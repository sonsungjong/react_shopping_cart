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
            <div className="tile-container">
                <div className="flex-padding">
                    <img src={cartItem?.image} className="rounded-box" alt={cartItem?.title}/>
                    <div className="margin-left-self-start-space-y">
                        <h1 className="bold-large-white-text">
                            {cartItem?.tile}
                        </h1>
                        <p className="white-text-bold-800">
                            {Math.floor(cartItem?.price * 1400).toLocaleString('ko-KR')} 원
                        </p>
                    </div>
                </div>
                <div>
                    <button onClick={hRemoveFromCart} className="bold-red-button">
                        제거
                    </button>
                </div>
            </div>
        </>
    )
}
