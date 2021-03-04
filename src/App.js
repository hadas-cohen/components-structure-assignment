import './style.css';
import 'antd/dist/antd.css';

// import {Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createContext, useCallback, useEffect, useState} from "react";

export const ProductsContext = createContext([])

function App() {
    const [products, setProducts] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setProducts(json)
    }, [])

    useEffect( () => {
        fetchData();
    }, [fetchData]);

    return (
        <ProductsContext.Provider value = {products}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/product/:id">
                            <ProductDetails />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ProductsContext.Provider>
    );
}

export default App;
