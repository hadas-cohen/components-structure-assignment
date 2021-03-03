import './style.css';
import {Header} from './components/Header'
import {Products} from './components/Products'
import {useEffect, useState, createContext} from 'react';

export const FilterContext = createContext(null)
export const defaultCategory = '-- all items --'

function setData(productsList, setProducts, setCategories) {
    setProducts(productsList)
    const groupBy = (xs, key) => xs.reduce((rv, x) => {
        (rv[x[key]] = true);
        return rv;
    }, {});

    setCategories([ defaultCategory, ...Object.keys(groupBy(productsList, 'category')) ]);
}

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState(defaultCategory);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(productsList => {
                setData(productsList, setProducts, setCategories);
            })
    }, []);

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            <div>
                <Header categories={categories}/>
                <Products products={products}/>
            </div>
        </FilterContext.Provider>
    );
}

export default App;
