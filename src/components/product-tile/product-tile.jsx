import './product-tile.css';

export default function ProductTile({product})
{
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
                    <button className='add-cart-btn'>
                        장바구니 담기
                    </button>
                </div>
            </div>
        </>
    )
}