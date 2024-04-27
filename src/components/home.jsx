import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "./product-tile/product-tile";
import './home.css'

export default function Home()
{
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false);

    async function fetchListOfProducts(){
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);

        if(data){
            setLoading(false);
            setProducts(data);
        }
    }

    useEffect(()=>{
        fetchListOfProducts();
    }, [])

    return(
        <div>
            Home
            {
                //min-h-screen w-full flex justify-center items-center
                loading ? (<div className="my-loading">
                    <Circles height={'120'} width={'120'} color="rgb(127, 29, 29)" visible={true}/>
                </div>)
                : 
                //min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3
                <div className="my-product-grid">
                    {
                        products && products.length ? products.map((e, idx)=>{
                            return(
                                <ProductTile key={idx} product={e}/>
                            )
                        }) 
                        : null
                    }
                </div>
            }
        </div>
    )
}