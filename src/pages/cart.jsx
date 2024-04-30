import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
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
        <div>
            {
                cart && cart.length ?
                <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
                    <div className="my-flex-center flex flex-col justify-center items-center p-3">
                        {
                            
                        }
                        cart
                    </div>
                </div>
                : <div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <h1 className="text-gray-800 font-bold text-xl mb-2">텅 빈 장바구니</h1>
                    <Link to={"/"}>
                        <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                            담으러 가기
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}