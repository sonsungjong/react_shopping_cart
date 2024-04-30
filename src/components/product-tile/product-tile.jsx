import { addToCart, removeFromCart } from '../../store/slices/cart-slice';
import './product-tile.css';
import {useDispatch, useSelector} from 'react-redux';

export default function ProductTile({product})
{
    // createSlice의 addToCart() 를 사용
    const dispatch = useDispatch();
    function hAddToCart()
    {
        dispatch(addToCart(product));
    }

    function hRemoveFromCart(){
        //console.log('removed')
        dispatch(removeFromCart(product.id));
    }

    // cart 프로퍼티를 추출
    const {cart} = useSelector((state)=>state);

    return (
        <>
        {/* group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl */}
            <div className="flex-col-container">
                {/* h-[180px] */}
                <div className="height-180px">
                    {/* object-cover h-full w-full */}
                    <img src={product?.image} alt={product?.title} className="full-cover-image"/>
                </div>
                <div>
                    {/* w-40 truncate mt-3 text-gray-700 font-bold text-lg */}
                    <h1 className="product-title">{product?.title}</h1>
                </div>
                {/* flex items-center justify-center w-full mt-5 */}
                <div className='add-cart-btn-wrapper'>
                    {/* bg-red-950 text-white border-2 rounded-lg font-bold p-4 */}
                    <button onClick={cart.some(item=>item.id === product.id) ? hRemoveFromCart : hAddToCart} className='add-cart-btn'>
                        {
                            cart.some(item=>item.id === product.id) ? '장바구니에서 제거' : '장바구니 담기'
                        }                        
                    </button>
                </div>
            </div>
        </>
    )
}