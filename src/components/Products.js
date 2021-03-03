import {ProductCard} from './ProductCard'
import {useContext} from 'react';
import {defaultCategory, FilterContext} from "../App";

export function Products({products}){
    const {filter} = useContext(FilterContext);
    const filtered = products.filter(product => filter === defaultCategory || product.category === filter )
    return (<section class="products">
        { filtered.map(product => (<ProductCard key={product.id} imgUrl={product.image} name={product.title} price={product.price} />))}
    </section>)
}