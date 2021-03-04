import {ProductCard} from './ProductCard'
import {useContext} from 'react';
import {defaultCategory, FilterContext} from "../views/Home";
import {ProductsContext} from "../App";

export function Products({priceFilter}){
    const {filter} = useContext(FilterContext);
    const products = useContext(ProductsContext);
    const {min, max} = priceFilter;
    const filtered = products.filter(product => filter === defaultCategory || product.category === filter )
        .filter(product => product.price>= min && product.price<= max)
    return (<section class="products">
        { filtered.map(product => (<ProductCard key={product.id} id={product.id} imgUrl={product.image} name={product.title} price={product.price} />))}
    </section>)
}