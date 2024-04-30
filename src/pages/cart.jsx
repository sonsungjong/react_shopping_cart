import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/cart-tile";
import './cart.css';


export default function Cart()
{

    //const state = useSelector(state=>state);
    //console.log(state);         // 리덕스 state에 담긴 것을 출력해본다

    const {cart} = useSelector(state=>state);
    const [totalCart, setTotalCart] = useState(0);
    console.log(cart, totalCart);

    useEffect(()=>{
        // 총합을 구한다
        setTotalCart(cart.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0));
    }, [cart]);

    return(
        // flex justify-center
        <div>
            {
                cart && cart.length ?
                <>
                {/* min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto */}
                <div className="my-element">
                    {/* flex flex-col justify-center items-center p-3 */}
                    <div className="centered-flex-column">
                        {/* w-[300px] */}
                        <div className="width-300px">
                            {/* flex flex-col justify-center items-end p-5 space-y-5 mt-14 */}
                            <div className="vertical-center-flex-end">
                                {/* font-bold text-lg text-red-800 */}
                                <h1 className="bold-large-red-text">
                                    장바구니 요약
                                </h1>
                                <p>
                                    {/* text-gray-800 font-bold */}
                                    <span className="bold-dark-text">
                                        담긴 갯수
                                    </span>
                                    <span>: {cart.length}</span>
                                </p>
                                <p>
                                    {/* text-gray-800 font-bold */}
                                    <span className="bold-dark-text">총 가격</span>
                                    <span>: {Math.floor(totalCart * 1400).toLocaleString('ko-KR')} 원</span>
                                </p>
                            </div>
                        </div>

                        {
                            cart.map((cartItem, idx)=>{
                                return(
                                    <CartTile cartItem={cartItem}/>
                                )
                            })
                        }
                        
                    </div>
                </div>

                </>
                : 
                // min-h-[80vh] flex flex-col items-center justify-center
                <div className="centered-flex-column-min-height">
                    {/* text-gray-800 font-bold text-xl mb-2 */}
                    <h1 className="bold-dart-text large-text-margin-bottom">텅 빈 장바구니</h1>
                    <Link to={"/"}>
                        {/* bg-red-950 text-white border-2 rounded-lg font-bold p-4 */}
                        <button className="bold-red-button">
                            담으러 가기
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}