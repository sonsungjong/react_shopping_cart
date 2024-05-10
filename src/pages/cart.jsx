import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/cart-tile";
import './cart.css';

export default function Cart()
{
    //const state = useSelector(state=>state);
    //console.log(state);         // 리덕스 state에 담긴 것을 출력해본다

    const cart = useSelector(state=>state.cart);
    const [totalCart, setTotalCart] = useState(0);
    console.log(cart, totalCart);

    useEffect(()=>{
        // 총합을 구한다
        setTotalCart(cart.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0));
    }, [cart]);

    return(
        <div>
            {
                cart && cart.length ?
                <>
                <div className="my-element">
                    <div>
                        <div className="vertical-center-flex-end">
                            <h1 className="bold-large-red-text">
                                장바구니 내역
                            </h1>
                            <p>
                                <span className="bold-dark-text">
                                    담긴 갯수
                                </span>
                                <span>: {cart.length}</span>
                            </p>
                            <p>
                                <span className="bold-dark-text">총 가격</span>
                                <span>: {Math.floor(totalCart * 1400).toLocaleString('ko-KR')} 원</span>
                            </p>
                        </div>
                    </div>

                    <div className="centered-flex-column">
                        {
                            cart.map((cartItem, idx)=>{
                                return(
                                    <CartTile cartItem={cartItem} key={idx}/>
                                )
                            })
                        }
                        
                    </div>
                </div>

                </>
                : 
                <div className="centered-flex-column-min-height">
                    <h1 className="bold-dart-text large-text-margin-bottom">텅 빈 장바구니</h1>
                    <Link to={"/"}>
                        <button className="bold-red-button">
                            담으러 가기
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}