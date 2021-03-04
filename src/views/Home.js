import {Header} from '../components/Header'
import {Products} from '../components/Products'
import {useEffect, useState, createContext, useContext} from 'react';
import {ProductsContext} from "../App";

export const FilterContext = createContext(null)
export const defaultCategory = '-- all items --'

function Home() {
    const products = useContext(ProductsContext);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState(defaultCategory);
    const [priceFilter, setPriceFilter] = useState({});


    useEffect( () => {
        const groupBy = (xs, key) => xs.reduce((rv, x) => {
            (rv[x[key]] = true);
            return rv;
        }, {});

        setCategories([ defaultCategory, ...Object.keys(groupBy(products, 'category')) ]);

        const min = Math.min(...products.map(product => product.price));
        const max = Math.max(...products.map(product => product.price));
        setPriceFilter({min,max});
    },[products])

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            <div>
                <Header categories={categories} setPriceFilter = {setPriceFilter} priceFilter = {priceFilter} max={priceFilter.max}/>
                <Products priceFilter = {priceFilter}/>
            </div>
        </FilterContext.Provider>
    );
}

export default Home;
