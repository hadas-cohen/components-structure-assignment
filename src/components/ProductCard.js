import {Link} from "react-router-dom";

function ProductImage({imgUrl}){
    return <div className="product-image">
        <img
            src={imgUrl}
        />
    </div>
}

function ProductInfo({name, price}){
    return <div className="product-info">
        <h5>{name}</h5>
        <h6>${price}</h6>
    </div>
}

export function ProductCard({id, imgUrl, name, price}){
    return <div className="product-card" >
        <Link to= {`/product/${id}`}>ProductDetails
            <ProductImage imgUrl={imgUrl}/>
            <ProductInfo name={name} price={price}/>
        </Link>
    </div>
}